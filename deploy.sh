npm run jest
npm run build
echo "/*    /index.html  200" > ./build/_redirects
netlify deploy --dir=./build --prod