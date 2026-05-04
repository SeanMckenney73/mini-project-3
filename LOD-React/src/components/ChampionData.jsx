import { Container } from "react-bootstrap";
import { useChampionData } from "../hooks/useChampionData";
import { Outlet } from "react-router-dom";

function ChampionData({ patch = "latest", champ, nameChampion, champID }) {
  
  const dataChampion = useChampionData(`http://localhost:3000/api/champions/${champID}`);

  const iconChampion = `https://cdn.communitydragon.org/${patch}/champion/${champ}/square`;

  
  if (!dataChampion || !dataChampion.data) {
    return (
      <Container className="p-5">
        <p>Loading champion details...</p>
      </Container>
    );
  }

 
 const { 
  champName, id, champRole, lane, 
  passName, passIcon, passDesc, 
  qName, qIcon, qDesc, qCD, 
  wName, wIcon, wDesc, wCD, 
  eName, eIcon, eDesc, eCD, 
  rName, rIcon, rDesc, rCD 
} = dataChampion.data;

  return (
    <div className="ChampionData">
      <Container className="p-5">
        <img 
          src={iconChampion} 
          alt={`${nameChampion} icon`} 
          width={80} 
          height={80} 
          className="mb-3"
        />
        
        <h2>{nameChampion}</h2>
        
        <p>
          <strong>Role:</strong> {champRole} | <strong>Lane:</strong> {lane}
        </p>

        <p>
            <strong>Passive Ability</strong><br/>
            <img src={passIcon} alt= {'passive ability icon'} style={{ width: '64px', height: '64px' }} /><br/>
            {passName}<br/>
            {passDesc}
        </p>

        <p>
            <strong>Q Ability</strong><br/>
            <img src={qIcon} alt= {'Q ability icon'} style={{ width: '64px', height: '64px' }} /><br/>
            {qName}<br/>
            {qDesc}<br/>
            {qCD}
        </p>

        <p>
            <strong>W Ability</strong><br/>
            <img src={wIcon} alt= {'W ability icon'} style={{ width: '64px', height: '64px' }} /><br/>
            {wName}<br/>
            {wDesc}<br/>
            {wCD}
        </p>

        <p>
            <strong>E Ability</strong><br/>
            <img src={eIcon} alt= {'E ability icon'} style={{ width: '64px', height: '64px' }} /><br/>
            {eName}<br/>
            {eDesc}<br/>
            {eCD}
        </p>

                <p>
            <strong>R Ability</strong><br/>
            <img src={rIcon} alt= {'R ability icon'} style={{ width: '64px', height: '64px' }} /><br/>
            {rName}<br/>
            {rDesc}<br/>
            {rCD}
        </p>

        
      </Container>
    </div>
  );
}

export default ChampionData;
