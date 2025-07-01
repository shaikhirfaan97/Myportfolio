import styled from "@emotion/styled";

export const Card = styled.div`
  display: grid;
  grid-gap: 2rem;
  margin-bottom: 4rem;
  grid-template-columns: 1fr;
  padding-bottom: 2rem;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 5px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    padding-bottom: 0;
  }
`;

export const CardLeft = styled.div`
  justify-self: center;
  height: 100%;
  img {
    object-fit: cover;
    max-width: 100%;
  }
`;

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h4 {
    font-size: 1.5rem;
    font-weight: 500;
  }

  p {
    font-weight: 400;
    max-width: 95%;
    margin-top: 10px;
    margin-bottom: 1rem;
    color: rgba(0, 0, 0, 0.815);
    text-align: center;
    @media (min-width: 992px) {
      text-align: start;
    }
  }

  @media (min-width: 992px) {
    align-items: flex-start;
    margin-top: 1rem;
  }
`;

export const TechCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 992px) {
    justify-content: flex-start;
  }
`;

export const TechCard = styled.div`
  border-radius: 10px;
  background-color: #f5f5f5;
  padding: 5px 10px;
  margin: 5px;
  font-size: 15px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.815);
  box-shadow: 0px 2px 5px rgba(160, 170, 180, 0.6);
`;

export const BtnGroup = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const FilterGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 1rem;

  button {
    padding: 8px 16px;
    border-radius: 8px;
    border: 1px solid #ccc;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &.active {
      background-color: #007bff;
      color: white;
      border-color: #007bff;
    }
  }
`;

export const TypeBadge = styled.span`
  background-color: ${({ type }) =>
    type === "Web" ? "#e0f7fa" : "#e8f5e9"};
  color: ${({ type }) => (type === "Web" ? "#00796b" : "#2e7d32")};
  border-radius: 5px;
  padding: 2px 8px;
  font-size: 0.75rem;
  margin-left: 0.5rem;
  text-transform: uppercase;
`;
