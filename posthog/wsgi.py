"""
WSGI config for posthog project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/2.2/howto/deployment/wsgi/
"""

import os, dotenv, sys

from django.core.wsgi import get_wsgi_application

sys.path.append("/home/ubuntu/Dev/posthog")

if os.environ.get("DJANGO_DEVELOPMENT") == "true":
    dotenv.read_dotenv(".env.development")
else:
    dotenv.read_dotenv("/home/ubuntu/Dev/posthog/.env")

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'posthog.settings')

application = get_wsgi_application()
