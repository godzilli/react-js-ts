import styles from './Avatar.module.css';

interface AvatarProps {
    hasBorder?: boolean;
    src: string;
    alt?: string;
}

export function Avatar({ hasBorder = true, src, alt}: AvatarProps) {
// const user = { name: "jennifer"} para desestruturar | const {name} = user; ficaria assim desestruturado

    return (
        <img 
        className={hasBorder
            ? styles.avatarWithBorder 
            : styles.avatar} 
            src={src}
            alt={alt}
            />
    );
}