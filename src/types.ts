interface Images {
    url: string;
}
export interface AlbumImg {
    images: Images[];
}
export interface ArtistsData {
    href: string;
    name: string;
    external_urls: {
        spotify: string;
    },
}

export interface topArtistsArray {
    id: string,
    name: string,
    href: string,
    external_urls: {
        spotify: string;
    },
    artists: ArtistsData[]
    album: AlbumImg
}
