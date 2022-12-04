import os

from celery import Celery
from django.conf import settings
from django.core.cache import cache
import time, dotenv

# Load .env variables
if os.environ.get("DJANGO_DEVELOPMENT") == "True":
    dotenv.read_dotenv(        os.path.join(
            os.path.dirname(os.path.dirname(__file__)),
            ".env.development",
        ))
else:
    dotenv.read_dotenv(        os.path.join(
            os.path.dirname(os.path.dirname(__file__)),
            ".env",
        ))

# set the default Django settings module for the 'celery' program.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'posthog.settings')

app = Celery('posthog')
app.conf.broker_url = os.environ.get('CELERY_BROKER_URL')  
# Using a string here means the worker doesn't have to serialize
# the configuration object to child processes.
# - namespace='CELERY' means all celery-related configuration keys
#   should have a `CELERY_` prefix.
app.config_from_object('django.conf:settings', namespace='CELERY')

# Load task modules from all registered Django app configs.
app.autodiscover_tasks()

# Connect to our Redis instance to store the heartbeat

@app.on_after_configure.connect
def setup_periodic_tasks(sender, **kwargs):
    # Heartbeat every 10sec to make sure the worker is alive
    sender.add_periodic_task(10.0, rabbitmq_heartbeat.s(), name='10 sec heartbeat')


@app.task
def rabbitmq_heartbeat():
    cache.set("POSTHOG_HEARTBEAT", int(time.time()))


@app.task(bind=True)
def debug_task(self):
    print('Request: {0!r}'.format(self.request))
