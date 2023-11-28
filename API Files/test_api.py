import requests
import pickle

url = 'http://127.0.0.1:3000/cartoonize'
files = {'image': ('image.png', open('wallpaper.png', 'rb'))}

response = requests.post(url, files=files)

if response.status_code == 200:
    with open('cartoon_image1.png', 'wb') as f:
        f.write(response.content)
    print("Cartoonized image saved as cartoon_image1.png")
else:
    print("Error:", response.json()['error'])
