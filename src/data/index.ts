export const SITE_TITLE = "JVMNT";
export const SITE_DESCRIPTION = "Un rincón en el espacio.";

export interface MenuItem {
	label: string;
	url: string;
}

export const menuItems: MenuItem[] = [
	{
		label: "/home",
		url: "/",
	},
	{
		label: "/blog",
		url: "/writings",
	},
	{
		label: "/notas",
		url: "/thoughts",
	},
	{
		label: "/bits",
		url: "/ships",
	},
	{
		label:"/now",
		url: "/now",
	}
];

export const title = "JVMNT";
export const description = "Un rincón en el espacio.";
export const image = "/images/ogimage.png";
export const url = "https://www.netlify.jvmnt.com";

export const ogImage = {
	src: "/images/ogimage.png",
	alt: "Sanju's Space",
};



export const socialLinks = [
	{
		label: "bluesky",
		url: "https://bsky.app/profile/jvmnt.bsky.social",
	},
	{
		label: "email",
		url: "mailto:jmontero@gmail.com",
	},
	{
		label: "github",
		url: "https://github.com/javimont",
	},
	{
		label: "dribbble",
		url: "https://dribbble.com/jvmnt",
	},
];
