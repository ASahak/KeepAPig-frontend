const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
    alias({
        '@components': 'src/components',
        '@pages': 'src/pages',
        '@assets' : 'src/assets',
        '@styles' : 'src/styles',
        '@hoc' : 'src/hoc',
        '@utils' : 'src/utils',
        '@hooks' : 'src/hooks',
        '@routes' : 'src/routes',
        '@graphql' : 'src/graphql',
        '@store' : 'src/store',
        '@common' : 'src/common',
        '@services' : 'src/services',
    })(config)

    return config
}
