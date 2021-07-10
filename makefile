PYTHON=python3.8
DJANGO_MANAGE=manage.py
ENV_DIR=.env_$(PYTHON)
WITH_CONTEXT=export DJANGO_SQLITE_PATH=Coronavirus_Dashboard.db && export DJANGO_SETTINGS_MODULE=Coronavirus_Dashboard.covid_dashboard.settings &&
ifeq ($(OS),Windows_NT)
    IN_ENV=. $(ENV_DIR)/Scripts/activate &&
else
    IN_ENV=. $(ENV_DIR)/bin/activate &&
endif
env: $(ENV_DIR)
shell:
	$(IN_ENV) pip install ipython
	$(IN_ENV) $(WITH_CONTEXT) python $(DJANGO_MANAGE) shell
plain-serve:
	$(IN_ENV) $(WITH_CONTEXT) python $(DJANGO_MANAGE) makemigrations --noinput
	$(IN_ENV) $(WITH_CONTEXT) python $(DJANGO_MANAGE) migrate --noinput
	$(IN_ENV) $(WITH_CONTEXT) python $(DJANGO_MANAGE) runserver
freeze: env
	- $(IN_ENV) pip freeze
clean:
	- @find -name '*.pyc' | xargs -r rm
env_clean: clean
	- @rm -rf $(ENV_DIR)
