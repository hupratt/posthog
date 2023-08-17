"""
Django settings for posthog project.

Generated by 'django-admin startproject' using Django 2.2.5.

For more information on this file, see
https://docs.djangoproject.com/en/2.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/2.2/ref/settings/
"""

import os
import sys
import dj_database_url
import sentry_sdk
from django.core.exceptions import ImproperlyConfigured

VERSION = '1.4.0'

# def get_env(key):
#     try:
#         return os.environ[key]
#     except KeyError:
#         raise ImproperlyConfigured(f'The environment var "{key}" is absolutely required to run this software')

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

DEBUG = os.environ.get("DEBUG", False)
TEST = 'test' in sys.argv

SITE_URL = os.environ.get('SITE_URL', 'http://localhost:8000')

SECURE_SSL_REDIRECT = False



if os.environ.get('DISABLE_SECURE_SSL_REDIRECT'):
    SECURE_SSL_REDIRECT = False
    SESSION_COOKIE_SECURE = False

if os.environ.get('IS_BEHIND_PROXY', False):
    USE_X_FORWARDED_HOST = True
    SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')

# IP block settings
ALLOWED_IP_BLOCKS = os.environ.get('ALLOWED_IP_BLOCKS', False)
TRUSTED_PROXIES = os.environ.get('TRUSTED_PROXIES', False)
TRUST_ALL_PROXIES = os.environ.get('TRUST_ALL_PROXIES', False)


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!

ALLOWED_HOSTS = [
    'posthog.craftstudios.shop','127.0.0.1','posthog.bitwcmd.duckdns.org'
]


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'posthog.apps.PostHogConfig',
    'rest_framework',
    'loginas',
    'corsheaders',
    'social_django',
    'django_celery_beat',
    "frontend"
    
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'posthog.middleware.AllowIP',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    # 'whitenoise.middleware.WhiteNoiseMiddleware'
]
INTERNAL_IPS = ['127.0.0.1']
CORS_ORIGIN_ALLOW_ALL = True

ROOT_URLCONF = 'posthog.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'posthog.wsgi.application'


# Social Auth

SOCIAL_AUTH_POSTGRES_JSONFIELD = True
SOCIAL_AUTH_USER_MODEL = 'posthog.User'

AUTHENTICATION_BACKENDS = (
    'social_core.backends.github.GithubOAuth2',
    'social_core.backends.gitlab.GitLabOAuth2',
    'django.contrib.auth.backends.ModelBackend',
)

SOCIAL_AUTH_PIPELINE = (

    'social_core.pipeline.social_auth.social_details',
    'social_core.pipeline.social_auth.social_uid',
    'social_core.pipeline.social_auth.auth_allowed',
    'social_core.pipeline.social_auth.social_user',
    'social_core.pipeline.user.get_username',
    'social_core.pipeline.social_auth.associate_by_email',
    'posthog.urls.social_create_user',
    'social_core.pipeline.social_auth.associate_user',
    'social_core.pipeline.social_auth.load_extra_data',
    'social_core.pipeline.user.user_details',
)

SOCIAL_AUTH_STRATEGY = 'social_django.strategy.DjangoStrategy'
SOCIAL_AUTH_STORAGE = 'social_django.models.DjangoStorage'
SOCIAL_AUTH_FIELDS_STORED_IN_SESSION = ['signup_token',]

SOCIAL_AUTH_GITHUB_SCOPE = ['user:email']
SOCIAL_AUTH_GITHUB_KEY = os.environ.get('SOCIAL_AUTH_GITHUB_KEY', "")
SOCIAL_AUTH_GITHUB_SECRET = os.environ.get('SOCIAL_AUTH_GITHUB_SECRET', "")

SOCIAL_AUTH_GITLAB_SCOPE = ['read_user']
SOCIAL_AUTH_GITLAB_KEY = os.environ.get('SOCIAL_AUTH_GITLAB_KEY', "")
SOCIAL_AUTH_GITLAB_SECRET = os.environ.get('SOCIAL_AUTH_GITLAB_SECRET', "")
SOCIAL_AUTH_GITLAB_API_URL = os.environ.get('SOCIAL_AUTH_GITLAB_API_URL', "https://gitlab.com")

# Database
# https://docs.djangoproject.com/en/2.2/ref/settings/#databases


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': os.environ.get('dbname'),
        'USER': os.environ.get('dbuser', 'postgres'),
        'PASSWORD': os.environ.get('dbpassword', ''),
        'HOST': os.environ.get('hostip', 'localhost'),
        'PORT': os.environ.get('pnumber', '5432'),
        'CONN_MAX_AGE': 0,
    }
}

# Broker


CELERY_BROKER_URL = os.environ.get('CELERY_BROKER_URL')      # celery connects to rabbitmq
CELERY_BEAT_MAX_LOOP_INTERVAL = 30  # sleep max 30sec before checking for new periodic events

# Password validation
# https://docs.djangoproject.com/en/2.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/2.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = "Europe/Luxembourg"

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.2/howto/static-files/

STATIC_ROOT = os.path.join(os.path.dirname(BASE_DIR), 'static')
STATIC_URL = '/static/'

AUTH_USER_MODEL = 'posthog.User'

LOGIN_URL = '/login'
LOGOUT_URL = '/logout'
LOGIN_REDIRECT_URL = '/'
APPEND_SLASH = False
CORS_URLS_REGEX = r'^/api/.*$'

REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.LimitOffsetPagination',
    'PAGE_SIZE': 100,
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ]
}

# Email
EMAIL_HOST = os.environ.get('EMAIL_HOST')
EMAIL_PORT = os.environ.get('EMAIL_PORT')
EMAIL_HOST_USER = os.environ.get('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = os.environ.get('EMAIL_HOST_PASSWORD')
EMAIL_USE_TLS = os.environ.get('EMAIL_USE_TLS', False)
EMAIL_USE_SSL = os.environ.get('EMAIL_USE_SSL', False)
DEFAULT_FROM_EMAIL = os.environ.get('DEFAULT_FROM_EMAIL', 'tim@posthog.com')


# You can pass a comma deliminated list of domains with which users can sign up to this service
RESTRICT_SIGNUPS = os.environ.get('RESTRICT_SIGNUPS', False)


LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "handlers": {
        "console": {
            "class": "logging.StreamHandler",
        },
    },
    "loggers": {
        "django": {
            "handlers": ["console"],
            "level": os.getenv("DJANGO_LOG_LEVEL", "INFO"),
        },
    },
}