export const SITE_TITLE = "JVMNT";
export const SITE_DESCRIPTION = "Un rincón en el espacio.";

export interface MenuItem {
	label: string;
	url: string;
}

export const menuItems: MenuItem[] = [
	{
		label: "home",
		url: "/",
	},
	{
		label: "blog",
		url: "/writings",
	},
	{
		label: "coleciones",
		url: "/thoughts",
	},
	{
		label: "ships",
		url: "/ships",
	},
];

export const title = "JVMNT";
export const description = "Un rincón en el espacio.";
export const image = "/images/ogimage.png";
export const url = "https://www.netlify.jvmnt.com";

export const ogImage = {
	src: "/images/ogimage.png",
	alt: "Sanju's Space",
};


export const products = [
	{
		name: "Fli.so",
		url: "https://fli.so",
		image: "/products/fli.png",
	},
	{
		name: "Uiino",
		url: "https://uiino.com",
		image: "/products/uiino.png",
	},
	{
		name: "SticAI",
		url: "https://sticai.com",
		image: "/products/sticai.png",
	},
	{
		name: "Dun",
		url: "https://dunsuite.com",
		image: "/products/dun.png",
	},
	{
		name: "DunTasks",
		url: "https://duntasks.com",
		image: "/products/duntasks.png",
	},
];

export const socialLinks = [
	{
		label: "bluesky",
		url: "https://bsky.jvmnt.com",
	},
	{
		label: "email",
		url: "mailto:jmontero@gmail.com",
	},
	{
		label: "github",
		url: "https://github.com/",
	},
	{
		label: "linkedin",
		url: "https://www.linkedin.com/",
	},
];
