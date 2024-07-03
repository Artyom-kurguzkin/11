const { registerBlockType } = wp.blocks;
const { useState, useEffect } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, Button } = wp.components;
const apiFetch = wp.apiFetch;

registerBlockType('sgb/dog-image', {
    title: 'Dog Image',
    icon: 'smiley',
    category: 'common',
    edit: () => {
        const [dogImage, setDogImage] = useState('');

        const fetchDogImage = () => {
            apiFetch({ url: 'https://dog.ceo/api/breeds/image/random' }).then(response => {
                setDogImage(response.message);
            });
        };

        useEffect(() => {
            fetchDogImage();
        }, []);

        return (
            <div className="sgb-dog-image-block">
                {dogImage ? (
                    <img src={dogImage} alt="Random Dog" style={{ maxWidth: '100%' }} />
                ) : (
                    <p>Loading...</p>
                )}
                <InspectorControls>
                    <PanelBody title="Dog Image Settings">
                        <Button isPrimary onClick={fetchDogImage}>Fetch New Image</Button>
                    </PanelBody>
                </InspectorControls>
            </div>
        );
    },
    save: () => {
        return <p>Check out the dog image in the editor!</p>;
    },
});
