import { useEffect, useState } from "react";
import "./Table.css";
import teamsScore from "../../assets/teams_score.json";
import CommentIcon from "../../assets/comment (2).png";
import Heart from "../../assets/heart.png";
import ChartLine from "../../assets/chart-line (1).png";
import Trophy from "../../assets/trophy.png";
import commentDots from "../../assets/comment-dots.png";
import peopleGroup from "../../assets/people-group.png";
import thumbsUp from "../../assets/thumbs-up.png";
import compass from "../../assets/compass.png";
import faceSmile from "../../assets/face-smile.png";
import heartCircle from "../../assets/heart-circle-plus.png";
import seedling from "../../assets/seedling.png";
import flag from "../../assets/flag.png";
import siteMap from "../../assets/sitemap.png";

interface Team {
  team?: string;
  participation: number;
  eNps: number;
  overallEngagement: number;
  recognition: number;
  feedback: number;
  relationshipWithPeers: number;
  relationshipWithManager: number;
  satisfaction: number;
  alignment: number;
  happiness: number;
  wellness: number;
  personalGrowth: number;
  ambassadorship: number;
}

const INITIAL_TEAM = {
  participation: 0,
  eNps: 0,
  overallEngagement: 0,
  recognition: 0,
  feedback: 0,
  relationshipWithPeers: 0,
  relationshipWithManager: 0,
  satisfaction: 0,
  alignment: 0,
  happiness: 0,
  wellness: 0,
  personalGrowth: 0,
  ambassadorship: 0,
};

function Table() {
  const [mean, setMean] = useState<Team>(INITIAL_TEAM);

  useEffect(() => {
    const totalTeams = teamsScore.length;
    const newMean = { ...INITIAL_TEAM };

    teamsScore.forEach((team) => {
      newMean.participation += team.participation / totalTeams;
      newMean.eNps += team.eNps / totalTeams;
      newMean.overallEngagement += team.overallEngagement / totalTeams;
      newMean.recognition += team.recognition / totalTeams;
      newMean.feedback += team.feedback / totalTeams;
      newMean.relationshipWithPeers += team.relationshipWithPeers / totalTeams;
      newMean.relationshipWithManager +=
        team.relationshipWithManager / totalTeams;
      newMean.satisfaction += team.satisfaction / totalTeams;
      newMean.alignment += team.alignment / totalTeams;
      newMean.happiness += team.happiness / totalTeams;
      newMean.wellness += team.wellness / totalTeams;
      newMean.personalGrowth += team.personalGrowth / totalTeams;
      newMean.ambassadorship += team.ambassadorship / totalTeams;
    });

    setMean(newMean);
  }, []);

  const parseNumber = (number: number): string =>
    Number.isInteger(number) ? number.toString() : number.toFixed(2);

  return (
    <div className="ContainerTable">
      <div className="Table">
        <table className="TableHead">
          <thead>
            <tr>
              <th>Teams</th>
              <th>
                <img src={CommentIcon}></img> Participation (%){" "}
              </th>
              <th>
                <img src={Heart}></img>eNPS
              </th>
              <th>
                <img src={ChartLine}></img>Overall Engagement
              </th>
              <th>
                <img src={Trophy}></img>Recgnition
              </th>
              <th>
                <img src={commentDots}></img>Feedback
              </th>
              <th>
                <img src={peopleGroup}></img>Relationship with peers
              </th>
              <th>
                <img src={siteMap}></img>Relationship with manager
              </th>
              <th>
                <img src={thumbsUp}></img>Satisfaction
              </th>
              <th>
                <img src={compass}></img>Alignment
              </th>
              <th>
                <img src={faceSmile}></img>Happiness
              </th>
              <th>
                <img src={heartCircle}></img>Wellness
              </th>
              <th>
                <img src={seedling}></img>Personal grouth
              </th>
              <th>
                <img src={flag}></img>Ambassadorship
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="BenchmarkBox">Benchmark (all industries)</td>
              <td className="BenchmarkBox">
                {parseNumber(mean.participation)}
              </td>
              <td className="BenchmarkBox">{parseNumber(mean.eNps)}</td>
              <td className="BenchmarkBox">
                {parseNumber(mean.overallEngagement)}
              </td>
              <td className="BenchmarkBox">{parseNumber(mean.recognition)}</td>
              <td className="BenchmarkBox">{parseNumber(mean.feedback)}</td>
              <td className="BenchmarkBox">
                {parseNumber(mean.relationshipWithPeers)}
              </td>
              <td className="BenchmarkBox">
                {parseNumber(mean.relationshipWithManager)}
              </td>
              <td className="BenchmarkBox">{parseNumber(mean.satisfaction)}</td>
              <td className="BenchmarkBox">{parseNumber(mean.alignment)}</td>
              <td className="BenchmarkBox">{parseNumber(mean.happiness)}</td>
              <td className="BenchmarkBox">{parseNumber(mean.wellness)}</td>
              <td className="BenchmarkBox">
                {parseNumber(mean.personalGrowth)}
              </td>
              <td className="BenchmarkBox">
                {parseNumber(mean.ambassadorship)}
              </td>
            </tr>

            {teamsScore.map((team) => {
              // const getValue = (value: number) => (value <= 5 ? "red" : "green");
              // const getValue = (value: number) => (value <= 3 ? "darkRed" : =>' 8'  = "lightGreen");
              const getValue = (value: number) => {
                if (value < 3) {
                  return "DarkRed";
                } else if (value > 8) {
                  return "lightGreen";
                } else if (value <= 5) {
                  return "red";
                } else {
                  return "green";
                }
              };

              return (
                <tr key={team.team}>
                  <td>{team.team}</td>
                  <td>{team.participation}</td>
                  <td>{team.eNps}</td>
                  <td className={getValue(team.overallEngagement)}>
                    {team.overallEngagement}
                  </td>
                  <td className={getValue(team.recognition)}>
                    {team.recognition}
                  </td>
                  <td className={getValue(team.feedback)}>{team.feedback}</td>
                  <td className={getValue(team.relationshipWithPeers)}>
                    {team.relationshipWithPeers}
                  </td>
                  <td className={getValue(team.relationshipWithManager)}>
                    {team.relationshipWithManager}
                  </td>
                  <td className={getValue(team.satisfaction)}>
                    {team.satisfaction}
                  </td>
                  <td className={getValue(team.alignment)}>{team.alignment}</td>
                  <td className={getValue(team.relationshipWithPeers)}>
                    {team.happiness}
                  </td>
                  <td className={getValue(team.happiness)}>{team.wellness}</td>
                  <td className={getValue(team.personalGrowth)}>
                    {team.personalGrowth}
                  </td>
                  <td className={getValue(team.ambassadorship)}>
                    {team.ambassadorship}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
