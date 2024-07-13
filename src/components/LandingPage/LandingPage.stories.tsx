import { Story, Meta } from "@storybook/react";
import LandingPage from "./LandingPage";

export default {
  title: "ReactComponentLibrary/LandingPage",
  component: LandingPage,
} as Meta;

// Primary story
const Template: Story = () => <LandingPage />;

export const Default = Template.bind({});
Default.args = {};

// Add more stories if needed for different variants or states
export const WithCustomContent = Template.bind({});
WithCustomContent.args = {
  // Add props or arguments to customize the component
};
