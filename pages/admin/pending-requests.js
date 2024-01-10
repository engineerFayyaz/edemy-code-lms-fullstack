import React from "react";
import { parseCookies } from "nookies";
import axios from "axios";
import { useToasts } from "react-toast-notifications";
import { useRouter } from "next/router";
import baseUrl from "@/utils/baseUrl";
import catchErrors from "@/utils/catchErrors";
import PageBanner from "@/components/Common/PageBanner";
import Link from "@/utils/ActiveLink";
import { redirectUser } from "@/utils/redirectUser";

const PendingRequests = ({ pendingRequests }) => {
  const { addToast } = useToasts();
  const router = useRouter();

  const approveReq = async (id) => {
    try {
      const url = `${baseUrl}/api/v1/apply/approve-requests`;
      const payload = { userId: id };
      const response = await axios.post(url, payload);
      addToast(response.data, {
        appearance: "success",
      });
      router.push("/admin/pending-requests");
    } catch (error) {
      catchErrors(error, setError);
    }
  };

  const declineReq = async (id) => {
    try {
      const url = `${baseUrl}/api/v1/apply/decline-requests`;
      const payload = { userId: id };
      const response = await axios.post(url, payload);
      addToast(response.data, {
        appearance: "success",
      });
      router.push("/admin/pending-requests");
    } catch (error) {
      catchErrors(error, setError);
    }
  };

  return (
    <>
      <PageBanner
        pageTitle="Admin Dashboard"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Admin Dashboard"
      />

      <div className="pt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-3">
              <div className="td-sidebar">
                <ul>
                  <li>
                    <Link
                      href="/admin/pending-requests"
                      activeClassName="active"
                    >
                      <a>Pending Requests</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" activeClassName="active">
                      <a>Dummy Text</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" activeClassName="active">
                      <a>Dummy Text</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-8 col-lg-9">
              <div className="card">
                <div className="card-header">
                  <h5>Pending Requests</h5>
                </div>
                <div className="card-body">
                  {pendingRequests.length ? (
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Instructor</th>
                          <th scope="col" className="text-right">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {pendingRequests.map((request, index) => (
                          <tr key={request.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{request.name}</td>
                            <td className="text-right">
                              <button
                                onClick={() => {
                                  if (window.confirm("Are you sure?")) {
                                    approveReq(request.id);
                                  }
                                }}
                                className="btn btn-success mr-2"
                              >
                                Approve
                              </button>
                              <button
                                onClick={() => {
                                  if (window.confirm("Are you sure?")) {
                                    declineReq(request.id);
                                  }
                                }}
                                className="btn btn-danger"
                              >
                                Decline
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <p className="text-center">No Pending Requests!</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PendingRequests.getInitialProps = async (ctx) => {
  const { token } = parseCookies(ctx);
  if (!token) {
    redirectUser(ctx, "/authentication");
  }
  const url = `${baseUrl}/api/v1/apply/pending-requests`;
  const payload = { headers: { Authorization: token } };
  const response = await fetch(url, payload);
  const data = await response.json();
  return data;
};

export default PendingRequests;
