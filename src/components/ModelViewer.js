import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Model(props) {
    const { scene } = useGLTF(props.modelFile);
    return <primitive object={scene} {...props} />;
}

function ModelViewer() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '85vh' }}>
            {/* First Card */}
            <Card style={{ width: '20rem', border: '1px solid #dee2e6', borderRadius: '8px', marginRight: '20px' }}>
                <div style={{ width: '100%', height: '300px', position: 'relative' }}>
                    <Canvas dpr={[1, 2]} shadows={'basic'} camera={{ fov: 45 }} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                        <color attach="background" args={['#00000']} />
                        <PresentationControls speed={1.5} global zoom={.5}>
                            <Stage environment={'studio'}>
                                <Model modelFile="/Poskus5.glb" scale={0.02}  rotation={[0, Math.PI, 0]} />
                            </Stage>
                        </PresentationControls>
                    </Canvas>
                </div>
                <Card.Body style={{ marginTop: '10px', marginLeft: '10px', marginBottom: '10px' }}>
                    <Card.Title>3D model of a t-shirt</Card.Title>
                    <Card.Text>
                        Feel free to drag around the model.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            {/* Second Card */}
            <Card style={{ width: '20rem', border: '1px solid #dee2e6', borderRadius: '8px' }}>
                <div style={{ width: '100%', height: '300px', position: 'relative' }}>
                    <Canvas dpr={[1, 2]} shadows={'basic'} camera={{ fov: 45 }} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                        <color attach="background" args={['#00000']} />
                        <PresentationControls speed={1.5} global zoom={.5}>
                            <Stage environment={'studio'}>
                                <Model modelFile="/Poskus4.glb" scale={0.02}  rotation={[0, Math.PI, 0]} />
                            </Stage>
                        </PresentationControls>
                    </Canvas>
                </div>
                <Card.Body style={{ marginTop: '10px', marginLeft: '10px', marginBottom: '10px' }}>
                    <Card.Title>3D model of another object</Card.Title>
                    <Card.Text>
                        Feel free to drag around the model.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ModelViewer;