Resources
==============================

This directory contains resources such as images for the homepage.

Images
------------

Since I used [next/image](https://nextjs.org/docs/api-reference/next/image) for image components, all
image optimizations are delegated to this API. Hence only concise optimizations are applied to the original
images.

1. Run the following command to create GIF files:

```bash
 $ ffmpeg -i foo.mov -filter_complex "[0:v] fps=4,scale=640:-1,split [a][b];[a] palettegen [p];[b][p] paletteuse=dither=none" foo.gif
 $ mogrify -layers 'optimize' -fuzz 7% foo.gif
```

CORS Proxy
------------

[https://ognis1205-cors-anywhere.vercel.app](https://ognis1205-cors-anywhere.vercel.app) is used as a CORS proxy
server. Only [https://ognis1205.github.io](https://ognis1205.github.io) domain is allowed.
