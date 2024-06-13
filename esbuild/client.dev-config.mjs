import * as esbuild from 'esbuild';

let ctx;

try {
    
    ctx = await esbuild.context({
        entryPoints: ['src/frontend/index.tsx'],
        bundle: true,
        minify: false,
        sourcemap: true,
        outfile: 'public/static/bundle.js',
        define: {
            'process.env.NODE_ENV': '"development"'
        }
    });

    await ctx.watch();
    console.log("Watching client ...");

} catch (error) {
    console.error('An error occured: ', error);
    process.exit(1);
}