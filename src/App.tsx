import { useState } from "react";
import {
  Body,
  CustomButton,
  Dropdown,
  Heading,
  ModalComponent,
  Shadow,
} from "./components/common";
import { GroupButton } from "./components/common/ButtonGroup";
import IconButton from "./components/common/ButtonWithIcon";
import { Tabs } from "./components/common/Tabs";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToggleControl } from "./components/common/ToggleControl";
import CustomAlert from "./components/common/CustomAlert";
import ReactApexChart from "react-apexcharts";
import { BarChartComponent } from "./components/common/BarChart";
import { CustomAccordion } from "./components/common/Accordion";
import MiniDrawer from "./components/common/MiniDrawer";
import { ColumnChartComponent } from "./components/common/ColumnChart";
import { Input } from "./components/common/Input";
import Range from "./components/common/Range";
import ProgressBarWithTooltip from "./components/common/ProgressBar";
import SelectComponent from "./components/common/Select";
import SearchComponent from "./components/common/SearchComponent";
import ToastComponent from "./components/common/Toast";

function App() {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioSelected, setRadioSelected] = useState("option1");
  const [switchChecked, setSwitchChecked] = useState(false);

  const radios = [
    { name: "Active", value: "1" },
    { name: "Radio", value: "2" },
    { name: "Radio", value: "3" },
  ];
  const options = [
    "Select an option 1",
    "Select an option 2",
    "Select an option 3",
    "Select an option 4",
  ];
  const handleStarClick = () => {
    console.log("Star clicked!");
  };

  const handleHeartClick = () => {
    console.log("Heart clicked!");
  };
  const handleAlertClose = () => {
    console.log("Alert closed");
  };
  const chartData: any = {
    series: [76, 67, 61],
    chartOptions: {
      colors: ["#FF6362", "#1DB949", "#FFC700"],
      labels: ["Item A", "Item B", "Item C"],
      legend: {
        show: false,
        position: "left",
      },
    },
  };
  const chartDatas: any = {
    series: [76, 67, 61, 90],
    chartOptions: {
      colors: ["#735D78", "#B392AC", "#D1B3C4", "#E8C2CA"],
      labels: ["test A", "test B", "test C", "test D"],
      legend: {
        show: true,
        position: "left",
      },
    },
  };
  const chartDataa: any = {
    series: [76, 67, 61, 90],
    chartOptions: {
      colors: ["#735D78", "#B392AC", "#D1B3C4", "#E8C2CA"],
      labels: ["test A", "test B", "test C", "test D"],
      legend: {
        show: false,
        position: "left",
      },
    },
  };
  const accordionItems = [
    {
      title: "Accordion Item 1",
      content:
        "Content for Accordion Item 1, Content for Accordion Item 1,Content for Accordion Item 1,Content for Accordion Item 1, Content for Accordion Item 1,Content for Accordion Item 1,Content for Accordion Item 1, Content for Accordion Item 1,Content for Accordion Item 1,Content for Accordion Item 1, Content for Accordion Item 1,Content for Accordion Item 1,Content for Accordion Item 1, Content for Accordion Item 1,Content for Accordion Item 1",
      secondTitle: "Secondary | Information",
    },
    {
      title: "Accordion Item 2",
      content:
        "Content for Accordion Item 1, Content for Accordion Item 1,Content for Accordion Item 1,Content for Accordion Item 1, Content for Accordion Item 1,Content for Accordion Item 1,Content for Accordion Item 1, Content for Accordion Item 1,Content for Accordion Item 1,Content for Accordion Item 1, Content for Accordion Item 1,Content for Accordion Item 1,Content for Accordion Item 1, Content for Accordion Item 1,Content for Accordion Item 1",
    },
  ];

  const [selectedValue, setSelectedValue] = useState<number | null>(0);

  const handleValueChange = (newValue: number) => {
    setSelectedValue(newValue);
  };
  const optionss = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const [selectedOption, setSelectedOption] = useState<string>(
    optionss[0].value
  );

  const handleSelectChange = (selectedValue: string) => {
    setSelectedOption(selectedValue);
  };

  const searchOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleSearch = (query: string, selectedOption: string) => {
    console.log(`Searching for '${query}' in ${selectedOption}`);
  };
  const [toasts, setToasts] = useState<any>([]);
  const showToast = (variant, message) => {
    setToasts([...toasts, { variant, message }]);
  };

  const handleCloseToast = () => {
    setToasts(toasts.slice(1));
  };
  return (
    <div style={{ display: "flex" }}>
      <MiniDrawer />

      <div
        style={{
          height: "100vh",
          overflow: "auto",
          width: "100%",
          padding: "20px",
        }}
      >
        <div>
          <div>
            <h1>Toast Component Example</h1>
            <button
              onClick={() =>
                showToast(
                  "success",
                  "Success message Success message Success message"
                )
              }
            >
              Show Success Toast
            </button>
            <button onClick={() => showToast("error", "Error message")}>
              Show Error Toast
            </button>
            <button onClick={() => showToast("info", "Info message")}>
              Show Info Toast
            </button>
            <button onClick={() => showToast("warning", "warning message")}>
              Show Info Toast
            </button>
            <div className="toast-container">
              {toasts.map((toast, index) => (
                <ToastComponent
                  key={index}
                  variant={toast.variant}
                  message={toast.message}
                  duration={3000}
                  onClose={handleCloseToast}
                />
              ))}
            </div>
          </div>
          <div>
            <h1>Progress Bar with Tooltip Example</h1>
            <ProgressBarWithTooltip
              progress={50}
              label={`${50}%`}
              tooltipPlacement="bottom"
              tooltipDelayShow={500}
              tooltipDelayHide={300}
            />
          </div>
        </div>
        <div>
          <Tabs
            variant="secondary"
            data={[
              {
                label: `Tab1`,
                content: <>Hello guys1</>,
              },
              {
                label: `Tab2`,
                content: <>Hello guys</>,
              },
              {
                label: `Tab3`,
                content: <>Hello guys</>,
              },
            ]}
          />
          <h1>Alert</h1>
          <CustomAlert variant="success" dismissible>
            This is a custom success alert.
          </CustomAlert>
          <CustomAlert variant="danger" dismissible onClose={handleAlertClose}>
            This is a dismissible danger alert.
          </CustomAlert>
          <CustomAlert variant="primary" dismissible onClose={handleAlertClose}>
            This is a dismissible danger alert.
          </CustomAlert>
          <CustomAlert variant="warning" dismissible onClose={handleAlertClose}>
            This is a dismissible danger alert.
          </CustomAlert>
        </div>
        <div
          style={{
            padding: "50px",
            border: "2px solid grey",
            margin: "50px",
            borderRadius: "5px",
          }}
        >
          <Tabs
            variant="primary"
            data={[
              {
                label: `Tab1`,
                content: <>Hello guys1</>,
              },
              {
                label: `Tab2`,
                content: <>Hello guys</>,
              },
              {
                label: `Tab3`,
                content: <>Hello guys</>,
              },
            ]}
          />
          <br />
          <br />
          <h1>Progess Component Example</h1>
          <ProgressBarWithTooltip
            progress={50}
            label={`${50}%`}
            tooltipPlacement="bottom"
            tooltipDelayShow={500}
            tooltipDelayHide={300}
          />
          <br />
          <div className="app-container">
            <h1>Range Component Example</h1>
            <Range onChange={handleValueChange} />
            {/* {selectedValue !== null && <p>Selected value: {selectedValue}%</p>} */}
            <br /> <br />
            {/* <Input type='text' id="search" iconName='fa-search' placeholder="Search"/> */}
            <h1>Search Component Example</h1>
            <Input
              type="text"
              id="search"
              iconName="fa-search"
              placeholder="Search anything"
              className="searchkro"
              onChange={(e) => console.log(e.target.value, "value")}
            />
            <br />
            <SearchComponent options={searchOptions} onSearch={handleSearch} />
          </div>
          <br />
          <h1>Input</h1>
          <Input
            type="text"
            id="name"
            iconName="fa-address-card"
            placeholder="Name"
            invalid={true}
          />
          <br />
          <Input
            type="email"
            id="email"
            iconName="fa-envelope"
            placeholder="Email"
          />
          <br />
          <Input type="password" id="password" placeholder="Password" />
          <br />
          <div>
            <h1>Select Component Example</h1>
            <SelectComponent
              options={optionss}
              value={selectedOption}
              onChange={handleSelectChange}
            />
            <p>Selected Option: {selectedOption}</p>
          </div>
          <ToggleControl
            type="switch"
            label="Switch"
            id="switch"
            checked={switchChecked}
            onChange={setSwitchChecked}
          />
          <br />
          <CustomButton
            size="large"
            onClick={() =>
              showToast(
                "success",
                "Success message Success message Success message"
              )
            }
          >
            Submit
          </CustomButton>
        </div>
        <div>
          <h1>Accordion</h1>
          <CustomAccordion items={accordionItems} />
        </div>
        <Heading type="h1" fontWeight="bold">
          This is display heading 1
        </Heading>
        <Heading type="h1" fontWeight="semibold">
          This is display heading 2
        </Heading>
        <Heading type="h1" fontWeight="medium">
          This is display heading 3
        </Heading>
        <br />
        {/* <ReactApexChart options={chartOptions} series={chartSeries} type="bar" height={390}/> */}
        <h1>Graphs and Chart</h1>
        <div
          style={{
            padding: "50px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <ColumnChartComponent
            series={[
              {
                name: "On Time",
                data: [35, 41, 36, 26, 45, 48, 52],
              },
              {
                name: "Delayed",
                data: [76, 85, 101, 98, 87, 105, 91],
              },
            ]}
            colors={["#FFC700", "#1DB949"]}
            xAxisCategories={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
            yAxisMinMax={{ min: 10, max: 100 }}
          />
          <BarChartComponent {...chartData} type="donut" />
        </div>
        <div
          style={{
            padding: "50px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <BarChartComponent {...chartDatas} type="radialBar" />
          <BarChartComponent
            {...chartDataa}
            type="radialBar"
            showTotal={true}
          />
        </div>

        <div>
          <h1>Toggle and switch</h1>
          <ToggleControl
            type="checkbox"
            label="Checkbox"
            id="checkbox"
            checked={checkboxChecked}
            onChange={setCheckboxChecked}
          />

          <ToggleControl
            type="radio"
            label="Radio Option 1"
            id="option1"
            checked={radioSelected === "option1"}
            onChange={() => setRadioSelected("option1")}
          />
          <ToggleControl
            type="radio"
            label="Radio Option 2"
            id="option2"
            checked={radioSelected === "option2"}
            onChange={() => setRadioSelected("option2")}
            disabled={true}
          />
        </div>
        <Heading type="h2" fontWeight="semibold">
          This is display heading 2.1
        </Heading>
        <Heading type="h2" fontWeight="medium">
          This is display heading 2.1
        </Heading>
        <Heading type="h2" fontWeight="regular">
          This is display heading 2.1
        </Heading>
        <br />
        <div>
          <h1>IconButton Component Example</h1>
          <IconButton
            icon={<FontAwesomeIcon icon={faStar} />}
            enabled={true}
            onClick={handleStarClick}
          />
          <br />
          <br />
          <IconButton
            icon={<FontAwesomeIcon icon={faHeart} />}
            enabled={true}
            onClick={handleHeartClick}
          />
          <br />
          <br />
          <IconButton
            icon={<FontAwesomeIcon icon={faHeart} />}
            enabled={false}
            onClick={handleHeartClick}
          />
        </div>
        <div style={{ width: "30%" }}>
          <Tabs
            variant="primary"
            data={[
              {
                label: `Tab1`,
                content: <>Hello guys1</>,
              },
              {
                label: `Tab2`,
                content: <>Hello guys</>,
              },
              {
                label: `Tab3`,
                content: <>Hello guys</>,
              },
            ]}
          />
        </div>
        <Body type="body1" color="error" fontWeight="bold">
          This is display heading 2.1
        </Body>
        <Body type="body2" color="success" fontWeight="semibold">
          This is display heading 2.1
        </Body>
        <Body type="body3" color="info" fontWeight="medium">
          This is display heading 2.1
        </Body>
        <Body type="body4" color="primary" fontWeight="normal">
          This is display heading 2.1
        </Body>
        <Body type="body4" color="basic" fontWeight="normal">
          This is display heading 2.1
        </Body>
        <div style={{ display: "flex", gap: "30px" }}>
          <Shadow>
            <div style={{ width: "210px", height: "308px" }}></div>
          </Shadow>
          <br />
          <br />
          <Shadow type="medium">
            <div style={{ width: "210px", height: "308px" }}>
              Hello from maksood
            </div>
          </Shadow>
          <br />
          <br />
          <Shadow type="none">
            <div style={{ width: "210px", height: "308px" }}>
              Hello from maksood
            </div>
          </Shadow>
        </div>
        <br />
        <div>
          <h1>Dropdown Example</h1>
          <Dropdown options={options} />
        </div>
        <br />
        <br />
        <CustomButton disabled={true} size="small">
          Submit
        </CustomButton>
        <br />
        <CustomButton buttonType="button-disabled" size="small">
          Submit
        </CustomButton>
        <br />
        <CustomButton size="medium">Submit</CustomButton>
        <br />
        <CustomButton size="large">Submit</CustomButton>
        <br />
        <CustomButton
          size="extra-large"
          onClick={(e) => console.log(e, "event")}
        >
          Submit
        </CustomButton>
        <br />
        <div style={{ width: "500px", marginLeft: "50px" }}>
          {/* <GroupButton radios={radios} type="radio" /> */}
        </div>
        <div style={{ width: "500px", marginLeft: "50px" }}>
          <GroupButton
            radios={radios}
            type="checkbox"
            variant="outline-primary"
          />
          <GroupButton radios={radios} type="checkbox" variant="primary" />
        </div>
        <ModalComponent
          buttonText="Launch modal"
          modalTitle="Modal title"
          modalBody="I will not close if you click outside me. Don't even try to press the escape key."
          modalCloseText="Close"
          modalConfirmText="Understood"
          animation={true}
          // backdropTransition="fade"
          // dialogTransition="zoom"
          // size="lg"
          // fullscreen={true}
          centered={true} // Specify whether the modal should be centered or not
        />
      </div>
    </div>
  );
}

export default App;
