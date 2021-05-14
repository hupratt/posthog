from typing import Dict, Union
from django.http import HttpResponse
from django.conf import settings
import json
from django.core.cache import cache
import time



def health(request):
    return HttpResponse("ok", content_type="text/plain")


def stats(request):
    stats_response: Dict[str, Union[int, str]] = {}

    last_heartbeat = cache.get("POSTHOG_HEARTBEAT") if cache else None
    worker_heartbeat = int(time.time()) - int(last_heartbeat) if last_heartbeat else None

    if worker_heartbeat and (worker_heartbeat == 0 or worker_heartbeat < 300):
        stats_response['worker_heartbeat'] = worker_heartbeat
    else:
        stats_response['worker_heartbeat'] = 'offline'

    return HttpResponse(json.dumps(stats_response), content_type="application/json")
