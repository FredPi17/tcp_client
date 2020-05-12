# locustfile.py
from locust import HttpLocust, TaskSet, task, between


class UserBehavior(TaskSet):

    def on_start(self):
        self.hello()

    def hello(self):
        response = self.client.get('/api/students')

    @task(1)
    def index(self):
       self.client.get('/api/contacts')


class WebsiteUser(HttpLocust):
    task_set = UserBehavior
    wait_time = between(5,6)
