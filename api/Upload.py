# 导入pymongo
import pymongo
from pymongo import MongoClient
from flask import Flask, request
import json
# import os
from gridfs import GridFS

client = pymongo.MongoClient(
    "mongodb+srv://Abner:Abner666@virus2.a6ehgde.mongodb.net/?retryWrites=true&w=majority")
db = client['Accounts(Test)']
fs = GridFS(db)

# client = MongoClient(os.environ['MONGODB_URI'])
# db = client['Accounts(Test)']
# fs = GridFS(db)

# 插入数据
# db.NAME.insert_many([
#     {'name': 'Abner', 'password': 'Abner666', 'id': '0'},
#     {'name': 'test1', 'password': 'test1', 'id': '0'},
#     {'name': 'test2', 'password': 'test2', 'id': '0'},
#     {'name': 'test3', 'password': 'test3', 'id': '0'},
# ])

doc = {'name': 'Abner', 'password': 'Abner666', 'id': '0'}
if db.NAME.find_one(doc) is None:
    db.NAME.insert_one(doc)

# 在下方写你的代码：查询出 “名侦探柯南”这条文档，并且不返回"_id"键
result = db.NAME.find_one({'name': 'Abner'}, {'_id': 0})
print(result)


app = Flask(__name__)



if __name__ == '__main__':
    # 运行Flask应用程序
    app.run()


