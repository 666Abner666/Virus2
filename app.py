# 导入
import pymongo
from flask import Flask, render_template, jsonify, request, Response
import json
from bson import json_util
from bson.objectid import ObjectId
from gridfs import GridFS


# from request import app as R
# import os
# from gridfs import GridFS

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

# app.register_blueprint(R)

image_urls = []


@app.route('/')
def index():
    # 渲染index.html模板并返回结果
    return render_template('index.html', image_urls=image_urls)

@app.route('/admin')
def admin():
    # 渲染index.html模板并返回结果
    return render_template('admin.html', image_urls=image_urls)


# @app.route('/get_all_images', methods=['GET'])
# def get_all_images():
#     image_urls = []
#     for image in db.images.find():
#         file_id = image['file_id']
#         image_url = f'/get_image/{str(image["_id"])}'
#         image_urls.append(image_url)
#     return jsonify({'image_urls': image_urls})


@app.route('/get_all_images_info', methods=['GET'])
def get_all_images_info():
    images_info = []
    for document in db.info.find():
        images_info.append({
            'author': document['author'],
            'name': document['name'],
            'date': document['date'],
            'url': document['url']
        })
    return jsonify({'image_info': images_info})


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


@app.route('/check_username', methods=['GET'])
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


image_id = None

# @app.route('/upload_image', methods=['POST'])
# def upload_image():
#     global image_urls
#     image_file = request.files['image']  # 获取上传的文件
#     # 将文件存储到 MongoDB 中
#     collection = db.images
#     result = collection.insert_one({'image_data': image_file.read()})
#     image_id = str(result.inserted_id)
#     image_url = f'/get_image/{image_id}'
#     image_urls.append(image_url)
#     return {'success': True, 'url': image_url}

# 上传图片并保存到 GridFS 中


@app.route('/upload_image', methods=['POST'])
def upload_image():
    global image_urls
    image_file = request.files['image']  # 获取上传的文件
    # 将文件存储到 GridFS 中
    file_id = fs.put(image_file.stream, filename=image_file.filename)
    # 将文件 ID 存储到 MongoDB 的 images 集合中
    collection = db.images
    result = collection.insert_one({'file_id': file_id})
    image_id = str(result.inserted_id)
    image_url = f'/get_image/{image_id}'
    image_urls.append(image_url)
    return {'success': True, 'url': image_url}

# 根据图片 ID 获取图片


@app.route('/get_image/<string:image_id>', methods=['GET'])
def get_image(image_id):
    # 从 images 集合中获取文件 ID
    collection = db.images
    result = collection.find_one({'_id': ObjectId(image_id)})
    if result is None:
        print(f'File not found for ID {image_id}')
        return 'File not found', 404
    file_id = result['file_id']
    # 从 GridFS 中获取文件内容
    file = fs.get(file_id)
    data = file.read()
    # 返回图片的二进制数据
    return Response(data, mimetype='image/jpeg')

# @app.route('/get_image/<string:image_id>', methods=['GET'])
# def get_image(image_id):
#     # 获取文件id
#     file_id = ObjectId(image_id)
#     # 使用文件id从GridFS中获取文件
#     grid_out = fs.get(file_id)
#     # 获取文件数据的二进制形式
#     image_binary_data = grid_out.read()
#     # 设置content type为image/jpeg，这样浏览器才能正确显示图片
#     response = make_response(image_binary_data)
#     response.headers.set('Content-Type', 'image/jpeg')
#     return response


@app.route('/save_image_data', methods=['POST'])
def save_image_data():
    data = request.get_json()
    author = data['author']
    name = data['name']
    date = data['date']
    url = data['url']
    document = {
        'author': author,
        'name': name,
        'date': date,
        'url': url
    }
    result = db.info.insert_one(document)
    return jsonify({'message': 'Data saved successfully', 'id': str(result.inserted_id)})
















@app.route('/upload_video', methods=['POST'])
def upload():
    data = request.json['data']
    name = request.json['name']
    db.videos.insert_one({'name': name, 'data': data})
    return {'message': '上传成功！'}

@app.route('/save_video_data', methods=['POST'])
def save_video_data():
    data = request.get_json()
    author = data['author']
    name = data['name']
    date = data['date']
    url = data['url']
    document = {
        'author': author,
        'name': name,
        'date': date,
        'url': url
    }
    result = db.info.insert_one(document)
    return jsonify({'message': 'Data saved successfully', 'id': str(result.inserted_id)})
















@app.route('/delete_data', methods=['POST'])
def delete_data():

    # 删除所有数据
    db.images.delete_many({})
    db.fs.files.delete_many({})
    db.fs.chunks.delete_many({})
    db.info.delete_many({})
    db.videos.delete_many({})

    return jsonify({'message': '删除成功'})


if __name__ == '__main__':
    # 运行Flask应用程序
    app.run()
