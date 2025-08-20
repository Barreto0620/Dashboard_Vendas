# Security Policy

## Supported Versions

This section tells people about which versions of the Sales Dashboard Power BI project are currently being supported with security updates.

| Version | Supported          | Status |
| ------- | ------------------ | ------ |
| 1.2.x   | :white_check_mark: | Current version with active support |
| 1.1.x   | :white_check_mark: | Limited security support |
| 1.0.x   | :x:                | No support - Please upgrade to v1.2+ |
| < 1.0   | :x:                | Deprecated versions |

### Version Notes
- **v1.2.x**: Recommended version with all security fixes
- **v1.1.x**: Receives only critical security patches
- **v1.0.x and earlier**: No longer receiving updates

## Reporting a Vulnerability

### How to Report a Vulnerability

If you've discovered a security vulnerability in the Sales Dashboard Power BI project, please help us keep it secure by following the guidelines below:

#### 📧 Communication Channels
- **Priority email**: suportwebcash@gmail.com
- **GitHub Issues**: For non-critical vulnerabilities (use `security` label)
- **Direct contact**: Via GitHub [@WebCash-inc](https://github.com/WebCash-inc)

#### ⏱️ Process and Timeline
1. **Initial confirmation**: Response within **48 hours**
2. **Assessment**: Complete analysis within **5 business days**
3. **Fix implementation**: Within **14 days** for critical vulnerabilities
4. **Public disclosure**: After fix implementation (if applicable)

#### 🔍 Required Information
When reporting, please include:
- **Detailed description** of the vulnerability
- **Steps to reproduce** the issue
- **Affected version** of the dashboard
- **Potential impact** of the vulnerability
- **Evidence** (screenshots, logs, etc.)
- **Your contact information** for follow-up

#### 🚨 Severity Classification

| Level | Description | Response Time |
|-------|-------------|---------------|
| **Critical** | Unauthorized access to sensitive data | 24h |
| **High** | Data integrity compromise | 48h |
| **Medium** | Vulnerabilities affecting functionality | 5 days |
| **Low** | Minor security issues | 10 days |

### 🛡️ Relevant Vulnerability Types

For this Power BI project, we particularly consider:

#### Data and Privacy
- Unauthorized exposure of sales data
- Leakage of sensitive business information
- Issues with data anonymization

#### Access and Authentication
- Access control bypass
- Privilege escalation in Power BI
- Row Level Security (RLS) problems

#### Data Integrity
- Unauthorized data manipulation
- Corruption of metrics and KPIs
- Malicious DAX alterations

#### Configuration and Deployment
- Insecure default configurations
- Credential exposure
- Data source connection issues

### ✅ What We Expect from You

- **Responsibility**: Don't disclose the vulnerability publicly until fixed
- **Cooperation**: Work with us to validate and fix the issue
- **Details**: Provide sufficient information to reproduce the problem
- **Patience**: Wait for our response within established timeframes

### ✅ What You Can Expect from Us

- **Quick response**: Receipt confirmation within 48h
- **Transparency**: Regular updates on progress
- **Recognition**: Public credit for discovery (if desired)
- **Fix**: Timely implementation of solution
- **Communication**: Status notifications about the fix

### 🏆 Recognition Program

We value contributions to project security:
- **Hall of Fame**: Recognition in README.md
- **Special badges**: For recurring contributors
- **PR priority**: For security collaborators

### ❌ Non-Accepted Vulnerabilities

- Issues exclusively related to Power BI Service
- Vulnerabilities requiring administrative access
- Social engineering attacks
- Performance issues that don't impact security
- Third-party library vulnerabilities without direct impact

### 📚 Security Resources

#### Relevant Documentation
- [Power BI Security Whitepaper](https://docs.microsoft.com/power-bi/guidance/whitepaper-powerbi-security)
- [Data Protection in Power BI](https://docs.microsoft.com/power-bi/admin/service-security-data-protection-overview)
- [Row Level Security Guide](https://docs.microsoft.com/power-bi/admin/service-admin-rls)

#### Implemented Best Practices
- ✅ Row Level Security (RLS) configured
- ✅ Sensitive data masking applied
- ✅ Audit logs enabled
- ✅ Regular data backup
- ✅ Version control for changes

### 📞 Emergency Contacts

For critical vulnerabilities requiring immediate attention:

- **Security Team**: suportwebcash@gmail.com
- **Lead Developer**: Via GitHub Issues tagging @WebCash-inc
- **Escalation**: For urgent cases, mention "SECURITY CRITICAL" in subject

---

## 🔒 Security Commitment

The security of business data is our top priority. This dashboard was developed following Power BI security best practices and we continue working to maintain the highest protection standards.

**Last updated**: August 2025  

---

*For questions about this security policy, contact us at security@webcash-inc.com*
