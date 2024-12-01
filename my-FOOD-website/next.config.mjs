/** @type {import('next').NextConfig} */
const nextConfig = {

        images:{
            remotePatterns:[
                {
                    protocol:"https",
                    hostname:'eu-west-2.cdn.hygraph.com/content/cm16n5rgg00v307ur36abjy9p/master',
                    port:"",
                    pathname:"/**",
                }
            ]
        }
    
}
export default nextConfig;
