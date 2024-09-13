import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Table from "./Table";
import teamsScore from "../../assets/teams_score.json";

// set number in teams
jest.mock("../../assets/teams_score.json", () => [
  {
    team: "Team A",
    participation: 80,
    eNps: 60,
    overallEngagement: 75,
    recognition: 85,
    feedback: 70,
    relationshipWithPeers: 90,
    relationshipWithManager: 88,
    satisfaction: 78,
    alignment: 85,
    happiness: 80,
    wellness: 72,
    personalGrowth: 88,
    ambassadorship: 82,
  },
  {
    team: "Team B",
    participation: 85,
    eNps: 70,
    overallEngagement: 80,
    recognition: 90,
    feedback: 75,
    relationshipWithPeers: 85,
    relationshipWithManager: 90,
    satisfaction: 80,
    alignment: 87,
    happiness: 85,
    wellness: 75,
    personalGrowth: 90,
    ambassadorship: 85,
  },
]);

describe("Table component", () => {
  test("all values in teamsScore array are numbers", () => {
    render(<Table />);

    teamsScore.forEach((team) => {
      // props be numbers?
      expect(typeof team.participation).toBe("number");
      expect(typeof team.eNps).toBe("number");
      expect(typeof team.overallEngagement).toBe("number");
      expect(typeof team.recognition).toBe("number");
      expect(typeof team.feedback).toBe("number");
      expect(typeof team.relationshipWithPeers).toBe("number");
      expect(typeof team.relationshipWithManager).toBe("number");
      expect(typeof team.satisfaction).toBe("number");
      expect(typeof team.alignment).toBe("number");
      expect(typeof team.happiness).toBe("number");
      expect(typeof team.wellness).toBe("number");
      expect(typeof team.personalGrowth).toBe("number");
      expect(typeof team.ambassadorship).toBe("number");
    });
  });
});
