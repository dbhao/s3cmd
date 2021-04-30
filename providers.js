const defaults = require('./defaults.json')

const providers = {
  aws: ({ region = 'US', access_key = '', secret_key = '', host_base = 's3.amazonaws.com'}) => ({
    bucket_location: region,
    host_base: host_base,
    host_bucket: '%(bucket)s.' + host_base,
    website_endpoint: 'http://%(bucket)s.s3-website-%(location)s.amazonaws.com/',
    access_key,
    secret_key,
  }),
  linode: ({ region = 'eu-central-1', access_key = '', secret_key = '', host_base = 'eu-central-1.linodeobjects.com' }) => ({
    bucket_location: 'US',
    host_base: host_base,
    host_bucket: `%(bucket)s.` + host_base,
    website_endpoint: `http://%(bucket)s.website-${region}.linodeobjects.com/`,
    access_key,
    secret_key,
  })
}

const makeConf = (provider) => {
  const opts = { ...defaults, ...provider }
  return Object.entries(opts).map(([k, v]) => `${k} = ${v}`)
}

module.exports = {
  providers,
  makeConf
}

