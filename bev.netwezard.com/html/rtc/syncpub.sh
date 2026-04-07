#aws s3 --profile scaledfury sync ./public_site/build/ s3://teststack-buck6f4d3e52-1k7lalnsmr2dh

aws s3 --profile drinkbev sync --exclude "*.zip" --exclude "$0" --exclude "webpack/node_modules/*" --exclude ".git/*" . s3://drinkbev-buck6f4d3e52-ybav32wbihj3
aws cloudfront --profile drinkbev create-invalidation --distribution-id E3TIDCSLGEBDSP --paths '/*'

