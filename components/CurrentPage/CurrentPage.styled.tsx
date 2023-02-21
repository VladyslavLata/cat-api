import styled from "styled-components";

export const Text = styled.p`
display: inline-flex;
justify-content: center;
align-items: center;
min-width: 143px;
min-height: 40px;
padding: ${p => `${p.theme.space[0]}px ${p.theme.space[9]}px`};
text-align: center;
text-transform: uppercase;
letter-spacing: 2px;
font-size: ${p => p.theme.fontSizes.m};
font-weight: ${p => p.theme.fontWeights.medium};
line-height: ${p => p.theme.lineHeights.body};
color: ${p => p.theme.colors.testAccentSecondary};
background-color: ${p => p.theme.colors.bgAccentPrimary};
border-radius: ${p=>p.theme.radii.s};
`