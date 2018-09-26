'use strict';

export default {
    port: 4200,
    devDir: 'dev/',
    prodDir: 'public/',
    scripts: {
        watch: 'app/media/js/*.js',
        src: 'app/media/js/index.js',
        devDest: 'dev/js',
        prodDest: 'public/js/'
    },
    styles: {
        watch: 'app/media/scss/**/*.scss',
        src: 'app/media/scss/norcaltrimmers.scss',
        devDest: 'dev/css',
        prodDest: 'public/css'
    },
    images: {
        src: 'app/media/images/**/*',
        devDest: 'dev/images',
        prodDest: 'public/images',
    },
    views: {
        src: 'app/index.html',
        devDest: 'dev/',
        prodDest: ''
    },
    svg: {
        src: 'app/icons/*.svg',
        devDest: 'dev/icons',
        prodDest: 'public/icons',
        config: {
            mode: {
                symbol: {
                    render: {
                        css: false,
                        scss: false
                    },
                    dest: 'sprite',
                    prefix: '.svg-%s',
                    example: false
                }
            }
        }
    },
    cdn: {
        prodBaseUrl: 'public',
        devBaseUrl: '',
        files: [
            '/js/*.js',
            '/css/*.css',
            '/images/*.*',
            'dev/css/*.css',
            'public/css/*.css',
            'dev/js/*.js',
            'public/js/*.js',
            'dev/images/*.{jpg,jpeg,png,gif,svg,ico}',
            'public/images/*.{jpg,jpeg,png,gif,svg,ico}'
        ],
        imageFiles:[
            '/images/*.*'
        ]
    },
    manifest: {
        jsProdDest : 'public/js/rev-manifest.json',
        cssProdDest : 'public/css/rev-manifest.json'
    }
};
