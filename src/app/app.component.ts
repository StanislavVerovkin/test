import { Component, OnInit } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

  teamRows: any[] = [
    { teamName: 'Bob', teamRole: 'Inter', admin_id: 43, role_id: 6 },
    { teamName: 'Bob1', teamRole: 'Inter1', admin_id: 12, role_id: 7 },
    { teamName: 'Bob2', teamRole: 'Inter2', admin_id: 34, role_id: 8 },
  ];

  assignedTeam = [
    { full_name: 'Bob', role: 'Inter', admin_id: 43, role_id: 6 },
    { full_name: 'Bob1', role: 'Inter1', admin_id: 12, role_id: 7 },
    { full_name: 'Bob2', role: 'Inter1', admin_id: 34, role_id: 8 },
  ];

  allAdmins = [
    { full_name: 'test', id: 2 },
    { full_name: 'test1', id: 3 },
    { full_name: 'test2', id: 4 },
  ];

  allRoles = [
    { key: 5, role: 'Role' },
    { key: 2, role: 'Integrator' },
  ];

  newRole = 2;

  constructor() {
  }

  ngOnInit() {

  }

  onSubmit(data) {

    this.teamRows.push({
      teamName: 'test',
      teamRole: 'Role'
    });

    /**
     * Add assigned admin
     */

    this.allAdmins.forEach(item => {
      this.teamRows.forEach(team => {
        if (team.teamName === item.full_name) {
          this.teamRows[ this.teamRows.length - 1 ].admin_id = item.id;
        }
      });
    });

    this.allRoles.forEach(item => {
      this.teamRows.forEach(team => {
        if (team.teamRole === item.role) {
          this.teamRows[ this.teamRows.length - 1 ].role_id = item.key;
        }
      });
    });

    /**
     * Edit assigned admin
     */

    data.role_id = this.newRole;

  }
}
