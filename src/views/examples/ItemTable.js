import React from 'react'
import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    Row,
    UncontrolledTooltip,
  } from "reactstrap";
  import Checkbox from '@material-ui/core/Checkbox';
const Itemtable = ({Avatar,Name,Budget,Statu,Progressvalue}) => {
    const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
    return (
      <tr>
        <th scope="row">
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </th>
        <th scope="row">
          <Media className="align-items-center">
            <a
              className="avatar rounded-circle mr-3"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <img alt="..." src={Avatar} />
            </a>
            <Media>
              <span className="mb-0 text-sm">Vue Paper UI Kit PRO</span>
            </Media>
          </Media>
        </th>
        <td>$2,200 USD</td>
        <td>
          <Badge color="" className="badge-dot mr-4">
            <i className="bg-success" />
            completed
          </Badge>
        </td>
        <td>
          <div className="avatar-group">
            <a
              className="avatar avatar-sm"
              href="#pablo"
              id="tooltip781594051"
              onClick={(e) => e.preventDefault()}
            >
              <img
                alt="..."
                className="rounded-circle"
                src={
                  require("../../assets/img/theme/team-1-800x800.jpg").default
                }
              />
            </a>
            <UncontrolledTooltip delay={0} target="tooltip781594051">
              Ryan Tompson
            </UncontrolledTooltip>
            <a
              className="avatar avatar-sm"
              href="#pablo"
              id="tooltip840372212"
              onClick={(e) => e.preventDefault()}
            >
              <img
                alt="..."
                className="rounded-circle"
                src={
                  require("../../assets/img/theme/team-2-800x800.jpg").default
                }
              />
            </a>
            <UncontrolledTooltip delay={0} target="tooltip840372212">
              Romina Hadid
            </UncontrolledTooltip>
            <a
              className="avatar avatar-sm"
              href="#pablo"
              id="tooltip497647175"
              onClick={(e) => e.preventDefault()}
            >
              <img
                alt="..."
                className="rounded-circle"
                src={
                  require("../../assets/img/theme/team-3-800x800.jpg").default
                }
              />
            </a>
            <UncontrolledTooltip delay={0} target="tooltip497647175">
              Alexander Smith
            </UncontrolledTooltip>
            <a
              className="avatar avatar-sm"
              href="#pablo"
              id="tooltip951447946"
              onClick={(e) => e.preventDefault()}
            >
              <img
                alt="..."
                className="rounded-circle"
                src={
                  require("../../assets/img/theme/team-4-800x800.jpg").default
                }
              />
            </a>
            <UncontrolledTooltip delay={0} target="tooltip951447946">
              Jessica Doe
            </UncontrolledTooltip>
          </div>
        </td>
        <td>
          <div className="d-flex align-items-center">
            <span className="mr-2">{Progressvalue} %</span>
            <div>
              <Progress
                max="100"
                value={Progressvalue}
                barClassName="bg-danger"
              />
            </div>
          </div>
        </td>
        <td className="text-right">
          <UncontrolledDropdown>
            <DropdownToggle
              className="btn-icon-only text-light"
              href="#pablo"
              role="button"
              size="sm"
              color=""
              onClick={(e) => e.preventDefault()}
            >
              <i className="fas fa-ellipsis-v" />
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-arrow" right>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Something else here
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </td>
      </tr>
    );
}

export default Itemtable
