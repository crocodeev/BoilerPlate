import * as esbuild from 'esbuild'

let ctx

try {
    
    ctx = await esbuild.context({
        entryPoints: ['src/backend/index.ts'],
        bundle: true,
        sourcemap: true,
        minify: false,
        platform: 'node',
        target: ['node20.10'],
        packages: 'external',
        define: {
            'process.env.NODE_ENV': '"development"'
        },
        outfile: './dist/backend/index.js'
    });

    await ctx.watch();
    console.log('Watching server ...');
    
} catch (error) {
    console.error('An error occured: ', error);
    process.exit(1)
}