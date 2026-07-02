# Ronard Tech — Django version

This folder runs the site using the existing Django project.

Run locally (Windows PowerShell):

```powershell
# activate virtualenv (if you use the provided myvenv)
.\..\myvenv\Scripts\Activate.ps1
cd mysite
python manage.py migrate
python manage.py runserver
```

Open http://127.0.0.1:8000/ in your browser.

Static files are in the `static/` folder. For production, collect them:

```bash
python manage.py collectstatic
```

If you want, I can wire a simple contact endpoint, add image assets, or deploy this to a host.

Vercel deployment notes:

- Ensure `requirements.txt` exists at the repository root (this project includes one).
- In the Vercel project settings, set the **Build Command** to:

```bash
python manage.py collectstatic --noinput
```

- Set environment variables in Vercel:
	- `DJANGO_SECRET_KEY` — a secure secret key
	- `ALLOWED_HOSTS` — your domain, or `*` for testing
	- `DEBUG` — set to `False` in production

- The repo contains `api/wsgi.py` and `vercel.json` configured to route requests to Django's WSGI handler.

