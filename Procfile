web: gunicorn covid_dashboard.wsgi:application
worker: celery -A covid_dashboard worker
worker: celery -A covid_dashboard beat -l info