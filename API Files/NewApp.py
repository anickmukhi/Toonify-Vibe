from flask import Flask, request, jsonify, send_file
import numpy as np
import cv2
import pickle

app = Flask(__name__)


def process_image(input_image):
    kernel = np.ones((2, 2), np.uint8)
    output = np.array(input_image)
    x, y, c = output.shape
    for i in range(c):
        output[:, :, i] = cv2.bilateralFilter(output[:, :, i], 5, 150, 150)

    return output


@app.route('/cartoonize', methods=['POST'])
def cartoonize():
    try:
        image_file = request.files['image']
        input_image = cv2.imdecode(np.frombuffer(image_file.read(), np.uint8), cv2.IMREAD_COLOR)

        processed_image = process_image(input_image)

        # Create a pickle file to store the processed image
        with open('processed_image.pkl', 'wb') as f:
            pickle.dump(processed_image, f)

        return send_file('processed_image.pkl', as_attachment=True)
    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000)