#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys
import dotenv


def main():
    if os.environ.get("DJANGO_DEVELOPMENT") == "True":
        dotenv.read_dotenv(        os.path.join(
            os.path.dirname(os.path.dirname(__file__)),
            ".env.development",
        ))
    else:
        dotenv.read_dotenv("/home/ubuntu/Dev/posthog/.env")
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'posthog.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()
