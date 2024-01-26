import { useEffect, useState } from "react";

export function ImagePreview({ file }: { file: File }) {
    const [src, setSrc] = useState<string | undefined>(undefined);

    useEffect(() => {
        const reader = new FileReader();
        reader.onload = (e) => {
            setSrc(e.target?.result as string);
        };
        reader.readAsDataURL(file);
    }, [file]);

    return (
        <img
            className="img-fluid img-thumbnail card-img-top"
            draggable={false}
            src={src}
            alt={file.name}
        />
    );
}
