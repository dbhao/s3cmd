const conf = (cluster, access_key, secret_key) => `[default]
access_key = ${access_key}
access_token = 
add_encoding_exts = 
add_headers = 
bucket_location = EU
ca_certs_file = 
cache_file = 
check_ssl_certificate = True
check_ssl_hostname = True
cloudfront_host = cloudfront.amazonaws.com
connection_pooling = True
content_disposition = 
content_type = 
default_mime_type = binary/octet-stream
delay_updates = False
delete_after = False
delete_after_fetch = False
delete_removed = False
dry_run = False
enable_multipart = True
encoding = UTF-8
encrypt = False
expiry_date = 
expiry_days = 
expiry_prefix = 
follow_symlinks = False
force = False
get_continue = False
gpg_command = /usr/bin/gpg
gpg_decrypt = %(gpg_command)s -d --verbose --no-use-agent --batch --yes --passphrase-fd %(passphrase_fd)s -o %(output_file)s %(input_file)s
gpg_encrypt = %(gpg_command)s -c --verbose --no-use-agent --batch --yes --passphrase-fd %(passphrase_fd)s -o %(output_file)s %(input_file)s
gpg_passphrase = f3Gf3dgl7jpY6(Tgvb$fg8Jf?13de34dF
guess_mime_type = True
host_base = ${cluster}.linodeobjects.com
host_bucket = %(bucket)s.${cluster}.linodeobjects.com
human_readable_sizes = True
invalidate_default_index_on_cf = False
invalidate_default_index_root_on_cf = True
invalidate_on_cf = False
kms_key = 
limit = -1
limitrate = 0
list_md5 = False
log_target_prefix = 
long_listing = False
max_delete = -1
mime_type = 
multipart_chunk_size_mb = 15
multipart_max_chunks = 10000
preserve_attrs = True
progress_meter = True
proxy_host = 
proxy_port = 0
public_url_use_https = False
put_continue = False
recursive = False
recv_chunk = 65536
reduced_redundancy = False
requester_pays = False
restore_days = 1
restore_priority = Standard
secret_key = ${secret_key}
send_chunk = 65536
server_side_encryption = False
signature_v2 = False
signurl_use_https = False
simpledb_host = sdb.amazonaws.com
skip_existing = False
socket_timeout = 300
stats = False
stop_on_error = False
storage_class = 
throttle_max = 100
upload_id = 
urlencoding_mode = normal
use_http_expect = False
use_https = True
use_mime_magic = True
verbosity = ERROR
website_endpoint = http://%(bucket)s.website-${cluster}.linodeobjects.com/
website_error = 404.html
website_index = index.html
`;


const core = require('@actions/core');

const { execSync } = require('child_process');
const { writeFileSync } = require('fs')



const result = execSync("/bin/bash -c 'pip3 install s3cmd --no-cache'").toString()

writeFileSync('/github/home/.s3cfg', conf(core.getInput('cluster'), core.getInput('access_key'), core.getInput('secret_key')), 'utf-8')

return core.setOutput("stdout", result);
