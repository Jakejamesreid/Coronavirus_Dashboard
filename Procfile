web: gunicorn covid_dashboard.wsgi:application
worker1: celery -A covid_dashboard worker
worker2: celery -A covid_dashboard beat -l info