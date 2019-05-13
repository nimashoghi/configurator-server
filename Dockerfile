FROM python:3-stretch

WORKDIR /app
COPY . .

RUN pip install -r requirements.txt

ENV FLASK_APP app.py

CMD ["flask", "run", "--host=0.0.0.0", "--port=80"]
