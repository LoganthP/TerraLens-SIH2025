# TerraLens - SIH 2025

<div align="center">

![TerraLens Logo](https://img.shields.io/badge/TerraLens-SIH2025-blue?style=for-the-badge)
![Python](https://img.shields.io/badge/python-3.8+-blue.svg?style=for-the-badge&logo=python)
![License](https://img.shields.io/badge/license-MIT-green.svg?style=for-the-badge)
![Status](https://img.shields.io/badge/status-active-success.svg?style=for-the-badge)

**An Advanced Geospatial Intelligence Platform for Land Monitoring and Change Detection**

*Developed for Smart India Hackathon 2025*

[Features](#features) • [Demo](#demo) • [Installation](#installation) • [Usage](#usage) • [Documentation](#documentation) • [Team](#team)

</div>

---

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Problem Statement](#problem-statement)
- [Solution Overview](#solution-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [System Architecture](#system-architecture)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Screenshots](#screenshots)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Team](#team)
- [Acknowledgments](#acknowledgments)
- [License](#license)
- [Contact](#contact)

---

## 🌍 About the Project

**TerraLens** is an intelligent geospatial analysis platform developed for Smart India Hackathon 2025. The system leverages advanced satellite imagery processing, machine learning algorithms, and real-time data visualization to provide comprehensive land monitoring, change detection, and environmental assessment capabilities.

### Key Highlights

- **Real-time Satellite Data Processing**: Automated acquisition and processing of multi-spectral satellite imagery from Sentinel-2, Landsat-8/9, and other open-source repositories
- **AI-Powered Change Detection**: Advanced machine learning models for detecting land cover changes, urban sprawl, deforestation, and environmental degradation
- **Interactive Geospatial Visualization**: Web-based 2D/3D mapping interface with multi-layer support for comprehensive spatial analysis
- **Predictive Analytics**: Time-series analysis and forecasting for land use patterns and environmental trends
- **Multi-User Collaboration**: Role-based access control for government agencies, researchers, and stakeholders

---

## 🎯 Problem Statement

**SIH 2025 - Problem Statement ID: [Your PS ID]**

**Theme**: Smart Automation / Smart Education / Disaster Management / Agriculture / Clean & Green Technology

**Organization**: [Issuing Organization Name]

### Challenge

Modern land management faces critical challenges in monitoring large geographical areas efficiently. Traditional methods of land surveying and change detection are:
- Time-consuming and labor-intensive
- Expensive for continuous monitoring
- Lack real-time insights for decision-making
- Insufficient for early detection of environmental threats
- Unable to process large-scale satellite data effectively

### Impact

Inefficient land monitoring leads to:
- Delayed response to illegal deforestation and encroachment
- Inadequate disaster preparedness and management
- Poor urban planning and infrastructure development
- Environmental degradation and loss of biodiversity
- Compliance issues with environmental regulations

---

## 💡 Solution Overview

TerraLens addresses these challenges by providing an end-to-end geospatial intelligence platform that:

1. **Automates Data Acquisition**: Integrates with STAC (SpatioTemporal Asset Catalogs) APIs to fetch multi-temporal satellite imagery from AWS, Google Earth Engine, and other repositories

2. **Intelligent Processing Pipeline**: Implements advanced image processing algorithms including:
   - Atmospheric correction and preprocessing
   - Cloud masking and quality assessment
   - Band composition and index calculation (NDVI, NDBI, NDWI, etc.)
   - Multi-temporal change detection

3. **AI-Powered Analysis**: Utilizes deep learning models for:
   - Land use/land cover (LULC) classification
   - Object detection and segmentation
   - Anomaly detection and change pattern recognition
   - Predictive modeling

4. **Actionable Intelligence**: Delivers insights through:
   - Interactive dashboards with real-time updates
   - Automated alert systems for detected changes
   - Downloadable reports and analytics
   - API access for integration with existing systems

---

## ✨ Features

### Core Capabilities

#### 🛰️ Satellite Data Management
- **Multi-Source Integration**: Support for Sentinel-2, Landsat 8/9, MODIS, and custom imagery
- **Automated Data Pipeline**: Scheduled downloads and preprocessing with configurable parameters
- **Cloud Storage**: Efficient storage using Cloud Optimized GeoTIFF (COG) format
- **Metadata Management**: Comprehensive cataloging with spatial and temporal indexing

#### 🔍 Analysis & Detection
- **Change Detection Algorithms**:
  - Image Differencing
  - Change Vector Analysis (CVA)
  - Post-Classification Comparison
  - Deep Learning-based Semantic Change Detection
  
- **Vegetation Indices Calculation**:
  - NDVI (Normalized Difference Vegetation Index)
  - NDBI (Normalized Difference Built-up Index)
  - NDWI (Normalized Difference Water Index)
  - SAVI, EVI, and custom indices

- **Land Cover Classification**:
  - Random Forest Classifier
  - Support Vector Machines (SVM)
  - U-Net based Semantic Segmentation
  - ResNet/EfficientNet based CNN models

#### 📊 Visualization & Reporting
- **Interactive Web Interface**:
  - 2D/3D map visualization using Leaflet/Cesium
  - Time-slider for temporal analysis
  - Multi-layer support with opacity control
  - Drawing and measurement tools

- **Dashboard Analytics**:
  - Real-time statistics and metrics
  - Trend analysis charts
  - Heatmaps and density visualization
  - Comparative analysis tools

- **Report Generation**:
  - Automated PDF/HTML report generation
  - Customizable templates
  - Export to GIS formats (GeoJSON, Shapefile, KML)
  - Data export for further analysis

#### 🔔 Alert & Notification System
- **Configurable Alerts**: Set thresholds for area changes, vegetation loss, or custom parameters
- **Multi-Channel Notifications**: Email, SMS, and webhook integration
- **Priority Tagging**: Categorize alerts based on severity and urgency
- **Historical Tracking**: Maintain audit logs of all detected changes

#### 🔐 Security & Access Control
- **Role-Based Access Control (RBAC)**: Admin, Analyst, Viewer roles with granular permissions
- **Authentication**: JWT-based secure authentication
- **API Security**: Rate limiting and API key management
- **Data Encryption**: Secure data storage and transmission

### Advanced Features

- **Disaster Monitoring Module**: Specialized tools for flood mapping, fire detection, and landslide assessment
- **Agricultural Insights**: Crop health monitoring, yield prediction, and precision agriculture support
- **Urban Planning**: Infrastructure mapping, sprawl analysis, and green space monitoring
- **Environmental Compliance**: Automated monitoring for regulatory compliance and reporting

---

## 🛠️ Technology Stack

### Backend
- **Language**: Python 3.8+
- **Framework**: FastAPI / Flask / Django
- **Geospatial Libraries**:
  - GDAL/OGR - Geospatial data abstraction
  - Rasterio - Raster data I/O
  - Geopandas - Vector data processing
  - Shapely - Geometric operations
  - Fiona - Vector data I/O
  - PyProj - Coordinate transformations

- **Machine Learning**:
  - TensorFlow / PyTorch - Deep learning frameworks
  - Scikit-learn - Classical ML algorithms
  - OpenCV - Computer vision operations
  - Segmentation Models - Pre-trained semantic segmentation models

- **Satellite Data Access**:
  - pystac-client - STAC API client
  - sentinelsat - Sentinel data downloader
  - landsatxplore - Landsat data access
  - earthengine-api - Google Earth Engine integration

### Frontend
- **Framework**: React.js / Vue.js / Angular
- **Mapping Libraries**:
  - Leaflet.js - 2D interactive maps
  - Cesium.js - 3D globe visualization
  - Mapbox GL JS - Vector tile rendering
  - Deck.gl - Large-scale data visualization

- **UI Components**:
  - Material-UI / Ant Design / Bootstrap
  - Chart.js / D3.js - Data visualization
  - React-Leaflet / Vue2Leaflet - Map components

### Database
- **Spatial Database**: PostgreSQL with PostGIS extension
- **Time-Series Database**: InfluxDB / TimescaleDB
- **NoSQL**: MongoDB for metadata storage
- **Caching**: Redis for session and cache management

### Infrastructure & DevOps
- **Containerization**: Docker, Docker Compose
- **Orchestration**: Kubernetes (optional for production)
- **CI/CD**: GitHub Actions / GitLab CI
- **Cloud Services**: AWS S3, Google Cloud Storage (for satellite data)
- **Message Queue**: RabbitMQ / Apache Kafka (for async processing)
- **Task Scheduler**: Celery / APScheduler

### Additional Tools
- **API Documentation**: Swagger / OpenAPI
- **Testing**: Pytest, Jest, Selenium
- **Code Quality**: Black, Flake8, ESLint, Prettier
- **Version Control**: Git, GitHub

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        User Interface                        │
│  (React/Vue Dashboard, Mobile App, Web Portal)              │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                     API Gateway Layer                        │
│         (FastAPI/Flask REST API, Authentication)            │
└────────────────────┬────────────────────────────────────────┘
                     │
        ┌────────────┼────────────┐
        │            │            │
        ▼            ▼            ▼
┌──────────────┬──────────────┬──────────────┐
│   Analysis   │  Data Mgmt   │   Reporting  │
│   Service    │   Service    │   Service    │
└──────┬───────┴──────┬───────┴──────┬───────┘
       │              │              │
       ▼              ▼              ▼
┌─────────────────────────────────────────────┐
│         Processing Pipeline                  │
│  • Satellite Data Ingestion                 │
│  • Preprocessing & Transformation           │
│  • ML Model Inference                       │
│  • Change Detection Algorithms              │
└──────────────────┬──────────────────────────┘
                   │
        ┌──────────┼──────────┐
        │          │          │
        ▼          ▼          ▼
┌──────────┬─────────────┬──────────┐
│PostgreSQL│   MinIO/S3  │  Redis   │
│(PostGIS) │  (Storage)  │ (Cache)  │
└──────────┴─────────────┴──────────┘
                   │
                   ▼
┌─────────────────────────────────────────────┐
│        External Data Sources                 │
│  • Sentinel Hub API                         │
│  • Google Earth Engine                      │
│  • AWS Open Data Registry                   │
│  • Landsat Collection                       │
└─────────────────────────────────────────────┘
```

### Data Flow

1. **Data Acquisition**: System queries STAC APIs based on AOI (Area of Interest) and time range
2. **Preprocessing**: Atmospheric correction, cloud masking, and band composition
3. **Analysis**: ML models process imagery for classification and change detection
4. **Storage**: Results stored in PostGIS with spatial indexing
5. **Visualization**: Frontend fetches data via REST API and renders on map interface
6. **Alerting**: Background jobs monitor changes and trigger notifications

---

## 🚀 Installation

### Prerequisites

- Python 3.8 or higher
- Node.js 14+ and npm/yarn
- PostgreSQL 12+ with PostGIS extension
- Docker and Docker Compose (optional but recommended)
- GDAL 3.0+ installed on system

### Option 1: Docker Installation (Recommended)

```bash
# Clone the repository
git clone https://github.com/LoganthP/TerraLens-SIH2025.git
cd TerraLens-SIH2025

# Create environment configuration
cp .env.example .env
# Edit .env file with your configuration

# Build and start containers
docker-compose up -d

# Run database migrations
docker-compose exec backend python manage.py migrate

# Create superuser
docker-compose exec backend python manage.py createsuperuser

# Access the application
# Frontend: http://localhost:3000
# Backend API: http://localhost:8000
# API Docs: http://localhost:8000/docs
```

### Option 2: Manual Installation

#### Backend Setup

```bash
# Clone repository
git clone https://github.com/LoganthP/TerraLens-SIH2025.git
cd TerraLens-SIH2025/backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Install GDAL (system-specific)
# Ubuntu/Debian:
sudo apt-get install gdal-bin libgdal-dev
# macOS:
brew install gdal
# Windows: Download from https://gdal.org/

# Set up environment variables
cp .env.example .env
# Edit .env with your database credentials and API keys

# Run migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Start development server
python manage.py runserver
# API will be available at http://localhost:8000
```

#### Frontend Setup

```bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies
npm install
# or
yarn install

# Create environment file
cp .env.example .env.local
# Edit with backend API URL

# Start development server
npm start
# or
yarn start
# Application will open at http://localhost:3000
```

#### Database Setup

```bash
# Install PostgreSQL and PostGIS
# Ubuntu/Debian:
sudo apt-get install postgresql postgresql-contrib postgis

# Create database
sudo -u postgres psql
postgres=# CREATE DATABASE terralens;
postgres=# CREATE USER terralens_user WITH PASSWORD 'your_password';
postgres=# GRANT ALL PRIVILEGES ON DATABASE terralens TO terralens_user;
postgres=# \c terralens
terralens=# CREATE EXTENSION postgis;
terralens=# \q
```

### Configuration

#### Environment Variables

Create a `.env` file in the backend directory:

```env
# Database Configuration
DB_NAME=terralens
DB_USER=terralens_user
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432

# Application Settings
SECRET_KEY=your-secret-key-here
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1

# Satellite Data Sources
SENTINEL_HUB_CLIENT_ID=your_client_id
SENTINEL_HUB_CLIENT_SECRET=your_client_secret
COPERNICUS_USERNAME=your_username
COPERNICUS_PASSWORD=your_password
EARTHENGINE_SERVICE_ACCOUNT=your_service_account.json

# AWS Configuration (for data storage)
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_STORAGE_BUCKET_NAME=your_bucket_name
AWS_S3_REGION_NAME=us-east-1

# Email Configuration (for alerts)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_HOST_USER=your_email@gmail.com
EMAIL_HOST_PASSWORD=your_app_password
EMAIL_USE_TLS=True

# Redis Configuration
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_DB=0

# Celery Configuration
CELERY_BROKER_URL=redis://localhost:6379/0
CELERY_RESULT_BACKEND=redis://localhost:6379/0
```

---

## 📖 Usage

### Quick Start Guide

#### 1. Create a New Project

```bash
# Login to the application
# Navigate to Projects > New Project

# Define Area of Interest (AOI)
# - Draw polygon on map or upload shapefile
# - Set project name and description
# - Select analysis period (start and end dates)
```

#### 2. Acquire Satellite Data

```python
# Using Python API
from terralens import SatelliteDataManager

# Initialize manager
sdm = SatelliteDataManager(api_key='your_api_key')

# Define area of interest
aoi = {
    "type": "Polygon",
    "coordinates": [[
        [longitude1, latitude1],
        [longitude2, latitude2],
        [longitude3, latitude3],
        [longitude1, latitude1]
    ]]
}

# Search for images
results = sdm.search(
    aoi=aoi,
    start_date='2023-01-01',
    end_date='2023-12-31',
    cloud_cover_max=20,
    collections=['sentinel-2-l2a']
)

# Download selected images
for item in results:
    sdm.download(item, output_dir='./data/raw')
```

#### 3. Run Analysis

```python
from terralens import ChangeDetection, LandCoverClassifier

# Initialize change detector
cd = ChangeDetection(method='deep_learning')

# Perform change detection
changes = cd.detect(
    image_before='./data/2023_01.tif',
    image_after='./data/2023_12.tif',
    output_path='./results/changes.tif'
)

# Classify land cover
classifier = LandCoverClassifier(model='random_forest')
land_cover = classifier.predict(
    image_path='./data/2023_12.tif',
    output_path='./results/landcover.tif'
)

# Calculate statistics
stats = cd.get_statistics(changes)
print(f"Total changed area: {stats['area_changed']} hectares")
print(f"Change percentage: {stats['change_percentage']}%")
```

#### 4. Visualize Results

Access the web interface at `http://localhost:3000`:

- **Dashboard**: View project overview and recent alerts
- **Map Viewer**: Interactive visualization of satellite imagery and analysis results
- **Analytics**: Charts and statistics of detected changes
- **Reports**: Generate and download comprehensive reports

### Advanced Usage

#### Batch Processing

```python
from terralens import BatchProcessor

# Process multiple AOIs
processor = BatchProcessor(
    aoi_list=['aoi1.geojson', 'aoi2.geojson', 'aoi3.geojson'],
    analysis_type='change_detection',
    time_period=('2023-01-01', '2023-12-31')
)

# Execute batch job
results = processor.run(parallel=True, num_workers=4)

# Export results
processor.export_results(results, format='geopackage')
```

#### Custom Analysis Pipeline

```python
from terralens.pipeline import Pipeline
from terralens.processors import *

# Create custom pipeline
pipeline = Pipeline([
    CloudMasking(threshold=0.3),
    AtmosphericCorrection(method='sen2cor'),
    BandMath(formula='(NIR - RED) / (NIR + RED)', output_name='NDVI'),
    Threshold(band='NDVI', value=0.3, operator='>'),
    VectorConversion(simplify_tolerance=10),
    SpatialFilter(min_area=1000)  # Square meters
])

# Execute pipeline
result = pipeline.execute(input_image='./data/input.tif')
result.save('./output/processed.geojson')
```

#### API Integration

```python
import requests

# API endpoint
BASE_URL = 'http://localhost:8000/api/v1'

# Authenticate
response = requests.post(
    f'{BASE_URL}/auth/login',
    json={'username': 'your_username', 'password': 'your_password'}
)
token = response.json()['access_token']

# Headers for authenticated requests
headers = {'Authorization': f'Bearer {token}'}

# Get project list
projects = requests.get(f'{BASE_URL}/projects/', headers=headers)

# Create new analysis
analysis = requests.post(
    f'{BASE_URL}/analysis/',
    headers=headers,
    json={
        'project_id': 1,
        'analysis_type': 'change_detection',
        'parameters': {
            'threshold': 0.5,
            'min_area': 1000
        }
    }
)

# Check analysis status
analysis_id = analysis.json()['id']
status = requests.get(f'{BASE_URL}/analysis/{analysis_id}/', headers=headers)
```

---

## 📚 API Documentation

Complete API documentation is available at `/api/docs` when running the server.

### Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/auth/register` | Register new user |
| POST | `/api/v1/auth/login` | User login |
| POST | `/api/v1/auth/logout` | User logout |
| GET | `/api/v1/auth/me` | Get current user info |
| PUT | `/api/v1/auth/password` | Change password |

### Project Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/projects/` | List all projects |
| POST | `/api/v1/projects/` | Create new project |
| GET | `/api/v1/projects/{id}/` | Get project details |
| PUT | `/api/v1/projects/{id}/` | Update project |
| DELETE | `/api/v1/projects/{id}/` | Delete project |

### Analysis Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/analysis/change-detection/` | Run change detection |
| POST | `/api/v1/analysis/classification/` | Run land cover classification |
| GET | `/api/v1/analysis/{id}/status/` | Check analysis status |
| GET | `/api/v1/analysis/{id}/results/` | Get analysis results |
| GET | `/api/v1/analysis/{id}/download/` | Download results |

### Data Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/data/search/` | Search satellite imagery |
| POST | `/api/v1/data/download/` | Download imagery |
| GET | `/api/v1/data/collections/` | List available collections |
| GET | `/api/v1/data/{id}/metadata/` | Get image metadata |

---

## 📸 Screenshots

### Dashboard
![Dashboard](./docs/images/dashboard.png)
*Main dashboard showing project overview and recent activity*

### Map Viewer
![Map Viewer](./docs/images/map-viewer.png)
*Interactive map interface with multi-layer support*

### Change Detection Results
![Change Detection](./docs/images/change-detection.png)
*Visualization of detected land cover changes*

### Analytics Dashboard
![Analytics](./docs/images/analytics.png)
*Statistical analysis and trend visualization*

---

## 🗺️ Roadmap

### Phase 1: Core Development (Completed)
- [x] Basic satellite data acquisition
- [x] Image preprocessing pipeline
- [x] Simple change detection algorithms
- [x] Web interface MVP
- [x] PostgreSQL database setup

### Phase 2: Advanced Features (Current)
- [x] Deep learning-based classification
- [x] Real-time data processing
- [x] Alert notification system
- [ ] Mobile application
- [ ] Batch processing optimization

### Phase 3: Production Ready (Q1 2026)
- [ ] Kubernetes deployment
- [ ] Performance optimization
- [ ] Comprehensive testing
- [ ] User documentation
- [ ] Security audit

### Phase 4: Enhanced Intelligence (Q2 2026)
- [ ] Predictive modeling
- [ ] Time-series forecasting
- [ ] Multi-sensor fusion
- [ ] 3D terrain analysis
- [ ] Automated report generation

### Future Enhancements
- Integration with drone imagery
- Real-time video stream analysis
- Blockchain for data integrity
- AI-powered insights generation
- Collaborative annotation tools

---

## 🤝 Contributing

We welcome contributions from the community! Please follow these guidelines:

### How to Contribute

1. **Fork the Repository**
   ```bash
   git clone https://github.com/LoganthP/TerraLens-SIH2025.git
   cd TerraLens-SIH2025
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**
   - Write clean, documented code
   - Follow PEP 8 style guide for Python
   - Follow Airbnb style guide for JavaScript
   - Add unit tests for new features

3. **Test Your Changes**
   ```bash
   # Backend tests
   pytest tests/

   # Frontend tests
   npm test
   ```

4. **Submit Pull Request**
   - Provide clear description of changes
   - Reference any related issues
   - Ensure all tests pass

### Code Style

```python
# Python example
def calculate_ndvi(red_band: np.ndarray, nir_band: np.ndarray) -> np.ndarray:
    """
    Calculate Normalized Difference Vegetation Index.
    
    Args:
        red_band: Red band reflectance values
        nir_band: Near-infrared band reflectance values
    
    Returns:
        NDVI values as numpy array
    
    Raises:
        ValueError: If band shapes don't match
    """
    if red_band.shape != nir_band.shape:
        raise ValueError("Band dimensions must match")
    
    return (nir_band - red_band) / (nir_band + red_band + 1e-10)
```

### Reporting Bugs

- Use GitHub Issues
- Include detailed description
- Provide steps to reproduce
- Add screenshots if applicable
- Specify environment details

---

## 👥 Team

### Development Team

| Name | Role | GitHub | LinkedIn |
|------|------|--------|----------|
| [Team Member 1] | Team Leader / Full Stack Developer | [@username1](https://github.com/username1) | [Profile](https://linkedin.com) |
| [Team Member 2] | Backend Developer / ML Engineer | [@username2](https://github.com/username2) | [Profile](https://linkedin.com) |
| [Team Member 3] | Frontend Developer / UI/UX Designer | [@username3](https://github.com/username3) | [Profile](https://linkedin.com) |
| [Team Member 4] | Data Scientist / Geospatial Analyst | [@username4](https://github.com/username4) | [Profile](https://linkedin.com) |
| [Team Member 5] | DevOps Engineer / Database Admin | [@username5](https://github.com/username5) | [Profile](https://linkedin.com) |
| [Team Member 6] | QA Engineer / Documentation | [@username6](https://github.com/username6) | [Profile](https://linkedin.com) |

### Mentors & Advisors

- **Project Mentor**: [Mentor Name] - [Designation]
- **Technical Advisor**: [Advisor Name] - [Organization]

---

## 🙏 Acknowledgments

- **Smart India Hackathon 2025** - For providing the platform and opportunity
- **[Issuing Organization]** - For the problem statement and guidance
- **Open Source Community** - For amazing libraries and tools:
  - [Sentinel Hub](https://www.sentinel-hub.com/) - Satellite imagery access
  - [Google Earth Engine](https://earthengine.google.com/) - Geospatial analysis platform
  - [GDAL](https://gdal.org/) - Geospatial data abstraction library
  - [Leaflet](https://leafletjs.com/) - Interactive mapping library
  - [TensorFlow](https://www.tensorflow.org/) - Machine learning framework

### Data Sources

- **Copernicus Programme** - Sentinel satellite data
- **USGS** - Landsat satellite data
- **NASA** - MODIS and other Earth observation data
- **OpenStreetMap** - Base map data

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 TerraLens Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📞 Contact

### Project Repository
- GitHub: [https://github.com/LoganthP/TerraLens-SIH2025](https://github.com/LoganthP/TerraLens-SIH2025)

### Team Contact
- Email: terralens.sih2025@gmail.com
- Website: [https://terralens-sih2025.netlify.app](https://terralens-sih2025.netlify.app)
- Documentation: [https://docs.terralens-sih2025.com](https://docs.terralens-sih2025.com)

### Social Media
- Twitter: [@TerraLensSIH](https://twitter.com/TerraLensSIH)
- LinkedIn: [TerraLens SIH 2025](https://linkedin.com/company/terralens-sih2025)

---

## 📊 Project Statistics

![GitHub stars](https://img.shields.io/github/stars/LoganthP/TerraLens-SIH2025?style=social)
![GitHub forks](https://img.shields.io/github/forks/LoganthP/TerraLens-SIH2025?style=social)
![GitHub issues](https://img.shields.io/github/issues/LoganthP/TerraLens-SIH2025)
![GitHub pull requests](https://img.shields.io/github/issues-pr/LoganthP/TerraLens-SIH2025)
![GitHub last commit](https://img.shields.io/github/last-commit/LoganthP/TerraLens-SIH2025)
![GitHub repo size](https://img.shields.io/github/repo-size/LoganthP/TerraLens-SIH2025)

---

<div align="center">

**Made with ❤️ for Smart India Hackathon 2025**

⭐ Star this repository if you find it helpful!

[Back to Top](#terralens---sih-2025)

</div>