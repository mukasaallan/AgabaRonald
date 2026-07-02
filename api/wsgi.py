import os
import sys
import traceback

# Ensure the project root is on PYTHONPATH
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
PROJECT_PATH = os.path.join(ROOT, 'mysite')
if ROOT not in sys.path:
    sys.path.insert(0, ROOT)
if PROJECT_PATH not in sys.path:
    sys.path.insert(0, PROJECT_PATH)

os.chdir(ROOT)

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mysite.settings')

application = None
app = None
handler = None

try:
    from django.core.wsgi import get_wsgi_application
    application = get_wsgi_application()
    app = application
    handler = application
except Exception:
    # Print full traceback to stderr so Vercel captures it in function logs
    traceback.print_exc()
    raise
