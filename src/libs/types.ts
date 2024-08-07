interface UserCardProps {
    name: string;
    email: string;
    imgUrl: string;
    address: string;
}
export type { UserCardProps };
// add type for UserCardDetail's Props

interface UserCardDetailProps {
    email: string;
    address: string;
}

export type { UserCardDetailProps };