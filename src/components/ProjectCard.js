import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col xs={12} sm={6} md={4} style={{ marginBottom: '20px', minHeight: '235px' }}>
      <div className="proj-imgbx" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <img src={imgUrl} style={{ maxWidth: '100%', height: 'auto', maxHeight: '250px' }} alt={title} />
        <div className="proj-txtx" style={{ padding: '10px 0', textAlign: 'center' }}>
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
