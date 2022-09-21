Resources
==============================

This directory contains resources such as images for the homepage.

Images
------------

Since I used [next/image](https://nextjs.org/docs/api-reference/next/image) for image components, all
image optimizations are delegated to this API. Hence only concise optimizations are applied to the original
images.

1. Run the following command and start minikune.

 ```bash
 $ mogrify -layers 'optimize' -fuzz 7% foo.gif
```
