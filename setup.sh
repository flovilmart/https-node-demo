CN=local.server

openssl req \
    -new \
    -newkey rsa:4096 \
    -days 365 \
    -nodes \
    -x509 \
    -subj "/C=US/ST=Denial/L=Springfield/O=Dis/CN=$CN" \
    -keyout $CN.key \
    -out $CN.cert

