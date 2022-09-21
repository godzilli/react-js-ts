import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
// const user = { name: "jennifer"} para desestruturar | const {name} = user; ficaria assim desestruturado

    return (
        <img 
        className={hasBorder
            ? styles.avatarWithBorder 
            : styles.avatar} 
            {...props}
            />
    );
}