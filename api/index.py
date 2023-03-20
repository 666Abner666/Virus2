# 导入pymongo
import pymongo
from pymongo import MongoClient
from flask import Flask, render_template, request, jsonify
import json
from bson import ObjectId, json_util
import os
# from wsgi import app
# from pymongo import MongoClient, json_util


# 建立连接
# client = pymongo.MongoClient('127.0.0.1', 27017)
# 创建数据库

client = pymongo.MongoClient(
    "mongodb+srv://Abner:Abner666@virus2.a6ehgde.mongodb.net/?retryWrites=true&w=majority")
db = client['Accounts(Test)']

# client = MongoClient(os.environ['MONGODB_URI'])
# db = client['Accounts(Test)']

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


@app.route('/')
def index():
    # 渲染index.html模板并返回结果
    return render_template('index.html')


@app.route('/data', methods=['POST'])
def handle_data():
    print(request.form)  # 查看传递的数据
    data = request.form  # 获取 POST 请求传递的数据
    # 处理数据
    # ...
    db.NAME.insert_one(request.form.to_dict())
    return "success"


@app.route('/send_data', methods=['GET'])
def send_data():
    # 查询所有数据
    data = list(db.NAME.find())
    # 转换为JSON格式字符串
    json_str = json.dumps(data, default=json_util.default)
    # 发送JSON数据给JS端
    return jsonify(json_str)


@app.route('/check_username')
def check_username():
    # 从查询参数中获取要检查的用户名
    username = request.args.get('name-reg')
    print(username)
    # 查询数据库，判断用户名是否存在
    user = db.NAME.find_one({'name': username})
    print(user)
    exists = (user is not None)

    # 将查询结果转换为 JSON 格式，返回给前端
    response = {'exists': exists}
    return jsonify(response)


@app.route('/login', methods=['POST'])
def login():
    username = request.form.get('username')
    password = request.form.get('password')
    user = db.NAME.find_one({'name': username})
#   Pass = db.NAME.find_one({'password': password})
    if not user:
        print(user)
        print(username)
        return jsonify({'success': False, 'message': 'username_not_found'})
    elif user['password'] != password:
        return jsonify({'success': False, 'message': 'password_incorrect'})
    else:
        return jsonify({'success': True})


if __name__ == '__main__':
    # 运行Flask应用程序
    app.run()


