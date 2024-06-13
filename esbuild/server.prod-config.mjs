import * as esbuild from 'esbuild';

try {
    
    await esbuild.build({
        entryPoints: ['src/backend/index.ts'],
        bundle: true,
        sourcemap: false,
        minify: true,
        platform: 'node',
        target: ['node20.10'],
        define: {
            'process.env.NODE_ENV':'"production"'
        },
        outfile: 'dist/server.js'
    });

} catch (error) {
    console.error('An error ocured during bundling: ', error);
    process.exit(1);
}