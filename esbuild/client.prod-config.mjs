import * as esbuild from 'esbuild';

try {
    
    await esbuild.build({
        entryPoints: ['src/frontend/index.tsx'],
        bundle: true,
        sourcemap: false,
        minify: true,
        outfile: 'public/static/bundle.js',
        define: {
            'process.env.NODE_ENV': '"production"'
        }
    })

} catch (error) {
    
    console.error("An error occured during bundling: ", error);
    process.exit(1);
}