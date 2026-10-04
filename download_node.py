import urllib.request
import zipfile
import os

url = 'https://nodejs.org/dist/v20.18.0/node-v20.18.0-win-x64.zip'
zip_path = 'node.zip'

if not os.path.exists('node_standalone'):
    print('Downloading Node.js binary...')
    urllib.request.urlretrieve(url, zip_path)
    print('Extracting Node.js binary...')
    with zipfile.ZipFile(zip_path, 'r') as z:
        z.extractall('node_standalone')
    os.remove(zip_path)
    print('Node.js ready!')
else:
    print('Node.js already extracted.')
