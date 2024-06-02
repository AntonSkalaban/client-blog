import withPlugins from "next-compose-plugins";
import createNextIntlPlugin from "next-intl/plugin";
import withSvgr from "next-plugin-svgr";

/** @type {import('next').NextConfig} */
const nextConfig = {};

const withNextIntl = createNextIntlPlugin();

export default withPlugins([withSvgr, withNextIntl], nextConfig);
